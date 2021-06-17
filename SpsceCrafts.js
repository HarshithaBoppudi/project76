import * as React from 'react';
import { View, StyleSheet, Button,TextInput,Text,TouchableOpacity,Image,Icon } from 'react-native';
import {Header} from 'react-native-elements';

export default class SpaceCraftsScreen extends React.Component {
render(){
  return(
    <View>
      <Header
 
 leftComponent={<Icon name='arrow-left' type='feather' onPress={()=>{
   this.props.navigation.goBack()
 }}/>}
 
/>
    <Text>Space Crafts Screen</Text>
    </View>
  )
}

}