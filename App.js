import "react-native-gesture-handler" 
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import DailyPic from './screens/DailyPic';
import SpaceCraft from './screens/SpaceCrafts';
import StarMap from './screens/StarMap';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default class App extends React.Component {
  render(){
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName = "Home" screenOptions = {{headerShown:false}}>
      <Stack.Screen name = "Home" component = {HomeScreen}/>
      <Stack.Screen name = "SpaceCrafts" component = {SpaceCraft}/>
      <Stack.Screen name = "DailyPic" component = {DailyPic}/>
      <Stack.Screen name = "StarMap" component = {StarMap}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
