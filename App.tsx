import React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screen/HomeScreen';
import DetailScreen from './src/screen/DetailScreen';

type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

function MyStack() {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen
        name="Home"
        options={{headerShown: false}}
        component={HomeScreen}
      />
      <RootStack.Screen name={'Detail'} component={DetailScreen} />
    </RootStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
