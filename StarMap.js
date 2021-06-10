import * as React from 'react';
import { View, StyleSheet, Button,TextInput,Text,TouchableOpacity,Image } from 'react-native';
import {WebView} from 'react-native-webview'

export default class StarMapScreen extends React.Component {
  constructor(){
      super()
      this.state=={
        latitude:'',
        longitude:''
      }
  }
  getMap=()=>{
    const{latitude,longitude}=this.state;
    const path='https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'
    }
    componentDidMount(){
      this.getMap()
    }
  
render(){
  return(
    
    <View>
   <WebView
   scalesPageToFit={true}
   source={{uri:path}}
   style={{marginTop:20,marginBottom:20}}
   />

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
  )
}


}
