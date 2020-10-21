import React, {Component} from 'react';
import {Image, Alert, TimePickerAndroid} from 'react-native';
import {
  Text,
  Container,
  Form,
  Spinner,
  Icon,
  View,
  Input,
  Item,
  Button,
  Content,
} from 'native-base';
import styles from './styles';
import firebase from '../../../database/firebase';
const logo = require('../../images/water1.png');

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
    };
    this.userLogin = this.userLogin.bind(this);
  }
  updateInputValue = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };
  userLogin() {
    if (this.state.email === '' && this.state.password === '') {
      Alert.alert('Pleace enter details to signin!');
    } else {
      this.setState({
        isLoading: true,
      });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          console.log(res);
          console.log('User logged-in successfully!');
          this.setState({
            isLoading: false,
            email: '',
            password: '',
          });
          this.props.navigation.navigate('main');
        })
        .catch((error) => this.setState({errorMessage: error.message}));
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.SpinnerView}>
          <Spinner color="blue" />
        </View>
      );
    }
    let form = '';
    form = (
      <Form>
        <View style={styles.container3}>
          <Item rounded style={styles.InputContainer}>
            <Input
              textContentType="emailAddress"
              placeholder="Login"
              value={this.state.email}
              onChangeText={(val) => this.updateInputValue(val, 'email')}
            />
          </Item>
        </View>
        <View style={styles.container3}>
          <Item rounded style={styles.InputContainer}>
            <Input
              placeholder="Hasło"
              secureTextEntry
              value={this.state.password}
              onChangeText={(val) => this.updateInputValue(val, 'password')}
            />
          </Item>
        </View>
        <View style={styles.containe3}>
          <Button
            rounded
            style={styles.ButtonStyle}
            onPress={() => this.userLogin()}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>signin</Text>
          </Button>
        </View>
      </Form>
    );
    return (
      <Container style={styles.container2}>
        <Content>
          <View style={styles.container2}>
            <Image style={styles.ContainerImage} source={logo} />
          </View>

          {form}
        </Content>
      </Container>
    );
  }
}
