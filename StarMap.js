import * as React from 'react';
import { View, StyleSheet, Button,TextInput,Text,TouchableOpacity,Image } from 'react-native';
import {WebView} from 'react-native-webview'
import {Header,Icon} from 'react-native-elements';
export default class StarMapScreen extends React.Component {
  constructor(){
      super()
      this.state={
        latitude:'12.34567',
        longitude:'21.05738'
      }
  }
 
   
  
  
render(){
  console.log(latitude,longitude)
  const longitude=this.state.longitude;
  const latitude=this.state.latitude;
  
  
    const path='https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'
  return(
    
    
    <View>
       <Header
 
  leftComponent={<Icon name='arrow-left' type='feather' onPress={()=>{
    this.props.navigation.goBack()
  }}/>}
  
/>
  
   <View>
   <TextInput
   style={{height:40,borderColor:'grey',borderWidth:1}}
   placeholder='enter your latitude'
   placeholderTextColor='#ffff#000000'
   onChangeText={(text)=>{
           this.setState({
             latitude:text
           })
   }}
   
   />

<TextInput
   style={{height:40,borderColor:'grey',borderWidth:1}}
   placeholder='enter your longitude'
   placeholderTextColor='#ffff#000000'
   onChangeText={(text)=>{
           this.setState({
             longitude:text
           })
   }}
   />
   </View>
   <WebView
   scalesPageToFit={true}
   source={{uri: path}}
   style={{marginTop:20,marginBottom:20}}
   />
    </View>
  )
}


}
