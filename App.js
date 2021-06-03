import * as React from 'react';
import { View, StyleSheet, Button,TextInput,Text,TouchableOpacity,Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './screens/Home'
import DailyPicScreen from './screens/DialyPic'
import SpaceCraftsScreen from './screens/SpsceCrafts'
import StarMapScreen from './screens/StarMap'
const Stack=createStackNavigator()
 function App() {
   return(
  <NavigationContainer>
  <Stack.Navigator 
  initialRouteName='Home'
  screenOptions={{headerShown:false}}
  >
    <Stack.Screen
    name='Home'
    Component={HomeScreen}

    />
    <Stack.Screen
    name='SpaceCrafts'
    Component={SpaceCraftsScreen}
    
    />
    <Stack.Screen
    name='StarMap'
    Component={StarMapScreen}
    
    />
    <Stack.Screen
    name='DialyPic'
    Component={DailyPicScreen}
    
    />

  </Stack.Navigator>
   </NavigationContainer>
)
  }
  export default App