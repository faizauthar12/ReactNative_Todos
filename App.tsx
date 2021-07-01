import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screen/HomeScreen';

type RootStackParamList = {
    Home: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

function MyStack() {
  return (
    <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{ cardStyle: { backgroundColor: '#fff' } }}
    >
      <RootStack.Screen name="Home" component={HomeScreen} />
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