// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet,Image , RefreshControl,
  SafeAreaView,
  ScrollView,} from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate some loading process
    setTimeout(() => {
      navigation.replace('Drower');
    }, 5000); // 2000 milliseconds (2 seconds) for example
  });

  return (
    <View style={styles.container}>
     
     <Image source={require('../assets/logo.jpeg')} style={styles.image} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#1E90FF'
  },
  image: {
    width: 200, // Set the width of your image
    height: 200,
     // Set the height of your image
     borderRadius:100
  },
});

export default SplashScreen;
