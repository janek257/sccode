// import React, {Component} from 'react';
// import {
//   ScrollView,
//   ActivityIndicator,
//   List,
//   ListItem,
//   TextInput,
// } from 'react-native';
// import {
//   Body,
//   Text,
//   Col,
//   Container,
//   Content,
//   Header,
//   Icon,
//   View,
//   Tabs,
//   Card,
//   Button,
// } from 'native-base';
// import styles from './styles';
// // import {AnimatedProgress} from 'react-native-reanimated-progress-bar';
// //import Animated from 'react-native-reanimated';
// import RNDateTimePicker from '@react-native-community/datetimepicker';
// import firebase from '../../../database/firebase';

// export default class MainWaterMonitor extends Component {
//   constructor() {
//     super();
//     this.ref = firebase.firestore().collection('boards');
//     this.state = {
//       title: '',
//       description: '',
//       author: '',
//       isLoading: false,
//     };
//   }
//   updateTextInput = (text, field) => {
//     const state = this.state;
//     state[field] = text;
//     this.setState(state);
//   };
//   saveBoard() {
//     this.setState({
//       isLoading: true,
//     });
//     this.ref
//       .add({
//         title: this.state.title,
//         description: this.state.description,
//         author: this.state.author,
//       })
//       .then((docRef) => {
//         this.setState({
//           title: '',
//           description: '',
//           author: '',
//           isLoading: false,
//         });
//         this.props.navigation.navigate('login');
//       })
//       .catch((error) => {
//         console.error('Error adding document: ', error);
//         this.setState({
//           isLoading: false,
//         });
//       });
//   }
//   render() {
//     if (this.state.isLoading) {
//       return (
//         <View style={styles.activity}>
//           <ActivityIndicator size="large" color="#0000ff" />
//         </View>
//       );
//     }
//     return (
//       <Container style={styles.container}>
//         <Content>
//           <View style={styles.subContainer}>
//             <TextInput
//               placeholder={'Title'}
//               value={this.state.title}
//               onChangeText={(text) => this.updateTextInput(text, 'title')}
//             />
//           </View>
//           <View style={styles.subContainer}>
//             <TextInput
//               multiline={true}
//               numberOfLines={4}
//               placeholder={'Description'}
//               value={this.state.description}
//               onChangeText={(text) => this.updateTextInput(text, 'description')}
//             />
//           </View>
//           <View style={styles.subContainer}>
//             <TextInput
//               placeholder={'Author'}
//               value={this.state.author}
//               onChangeText={(text) => this.updateTextInput(text, 'author')}
//             />
//           </View>
//           <View style={styles.button}>
//             <Button leftIcon={{name: 'save'}} onPress={() => this.saveBoard()}>
//               <Text>save</Text>
//             </Button>
//           </View>
//         </Content>
//       </Container>
//     );
//   }
//}

import React, {useState} from 'react';

// import all the components we are going to use
import {Text, View, Card, Col, Row, CardItem, Button} from 'native-base';
import {SafeAreaView} from 'react-native';
//import TimePicker from the package we installed
import TimePicker from 'react-native-simple-time-picker';
import styles from './styles';

const App = () => {
  const [selectedHours1, setSelectedHours1] = useState(0);
  const [selectedMinutes1, setSelectedMinutes1] = useState(0);
  const [selectedHours2, setSelectedHours2] = useState(0);
  const [selectedMinutes2, setSelectedMinutes2] = useState(0);
  // const Quantity = () => {
  //   let csore =
  // };
  return (
    <SafeAreaView>
      <Card style={styles.card}>
        <CardItem header bordered>
          <Row>
            <Col>
              <Text style={styles.textStyle}>
                Wake Up: {selectedHours1}:{selectedMinutes1}
              </Text>
              <TimePicker
                selectedHours={selectedHours1}
                selectedMinutes={selectedMinutes1}
                onChange={(hours1, minutes1) => {
                  setSelectedHours1(hours1);
                  setSelectedMinutes1(minutes1);
                }}
              />
            </Col>
          </Row>
        </CardItem>
      </Card>
      <Card style={styles.card}>
        <CardItem header bordered>
          <Row>
            <Col>
              <Text style={styles.textStyle}>
                Go to sleep: {selectedHours2}:{selectedMinutes2}
              </Text>

              <TimePicker
                style={styles.card}
                selectedHours={selectedHours2}
                selectedMinutes={selectedMinutes2}
                onChange={(hours2, minutes2) => {
                  setSelectedHours2(hours2);
                  setSelectedMinutes2(minutes2);
                }}
              />
            </Col>
          </Row>
        </CardItem>
      </Card>
      <Card style={styles.card}>
        <CardItem header bordered>
          <Text style={styles.textStyle}>
            You must drink ... glasses on day
          </Text>
        </CardItem>
      </Card>
      <Card style={styles.card1}>
        <CardItem header bordered>
          <Button>
            <Text>how many glasses</Text>
          </Button>
        </CardItem>
      </Card>
      <Card style={styles.card1}>
        <CardItem header bordered>
          <Text>Your satus bar in day</Text>
        </CardItem>
      </Card>
    </SafeAreaView>
  );
};

export default App;
