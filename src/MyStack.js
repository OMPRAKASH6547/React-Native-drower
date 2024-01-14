import React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen ';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = ({navigation}) => {
  return (
    <NavigationContainer initialState={HomeScreen}>
      <Stack.Navigator >
        <Stack.Screen
        
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default MyStack
