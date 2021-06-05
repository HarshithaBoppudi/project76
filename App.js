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
    component={HomeScreen}

    />
    <Stack.Screen
    name='SpaceCrafts'
    component={SpaceCraftsScreen}
    
    />
    <Stack.Screen
    name='StarMap'
    component={StarMapScreen}
    
    />
    <Stack.Screen
    name='DialyPic'
    component={DailyPicScreen}
    
    />

  </Stack.Navigator>
   </NavigationContainer>
)
  }
  export default App