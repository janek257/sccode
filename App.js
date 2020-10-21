import React, {useEffect} from 'react';
import {StatusBar, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import BackgroundTask from 'react-native-background-task';

import Login from './src/screens/login/index';
import Main from './src/screens/main/index';

const Stack = createStackNavigator();
function StackMenu() {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="main"
        component={Main}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
      <StackMenu />
    </NavigationContainer>
  );
};
export default App;
