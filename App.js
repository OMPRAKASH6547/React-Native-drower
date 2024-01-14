// App.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import ProfileScreen from './src/ProfileScreen ';
import SplashScreen from './src/SplashScreen';
import AboutUs from './src/pages/AboutUs';
import Services from './src/pages/Services';
import Experties from './src/pages/Experties';
import HireDeveloper from './src/pages/HireDeveloper';
import Testimonial from './src/pages/Testimonial';
import Enquiry from './src/pages/Enquiry';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer  > 
      <Stack.Navigator initialRouteName="SplaceScreen" headerMode="none" >
      <Stack.Screen name="SplaceScreen" component={SplashScreen}  />

        <Stack.Screen name="Drower" component={DrawerNavigator} />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
        {/* <Drawer.Navigator initialRouteName="SplaceScreen">
        <Drawer.Screen name="SplaceScreen" component={SplashScreen} />

        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" >
  
      <Drawer.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="About Us" component={AboutUs} />
        <Stack.Screen name="Services" component={Services} />
        <Stack.Screen name="Experties" component={Experties} />
        <Stack.Screen name="Hiredeveloper" component={HireDeveloper} />
        <Stack.Screen name="Testimonial" component={Testimonial} />
        <Stack.Screen name="Enquiry" component={Enquiry} />






        </Drawer.Navigator>
  );
};

export default App;
