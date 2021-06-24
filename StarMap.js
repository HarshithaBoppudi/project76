import * as React from 'react';
import { View, StyleSheet, Button,TextInput,Text,TouchableOpacity,Image,Platform,StatusBar,SafeAreaView } from 'react-native';
import {WebView} from 'react-native-webview'
import {Header,Icon} from 'react-native-elements';
export default class StarMapScreen extends React.Component {
  constructor(){
      super()
      this.state={
        latitude:'',
        longitude:''
      }
  }
 
   
  
  
render(){
  console.log(latitude,longitude)
  const longitude=this.state.longitude;
  const latitude=this.state.latitude;
  
  
    const path='https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'
  return(
    
    
    <View style={{ flex: 1, backgroundColor: "#1a0023" }}>
      <SafeAreaView style={{marginTop:Platform.OS==='android'?StatusBar.currentHeight:0}} />.
       <Header
 
  leftComponent={<Icon name='arrow-left' type='feather' onPress={()=>{
    this.props.navigation.goBack()
  }}/>}
  
/>
<Text style={{fontSize:35,fontWeight:"bold", color:"white", 
justifyContent:"center",alignContent:"center"}}>Star Map</Text>
  
   <View>
   <TextInput
   style={{height:40,borderColor:'grey',borderWidth:1,color:"white" }}
   placeholder='enter your latitude'
   placeholderTextColor='#ffff#000000'
   onChangeText={(text)=>{
           this.setState({
             latitude:text
           })
   }}
   
   />

<TextInput
   style={{height:40,borderColor:'grey',borderWidth:1,color:"white" }}
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
