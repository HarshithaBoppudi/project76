import * as React from 'react';
import { View, StyleSheet, Button,TextInput,Text,TouchableOpacity,Image,StatusBar,FlatList,SafeAreaView,ImageBackground,
Dimensions,Platform} from 'react-native';
import axios from 'axios';
import { Linking } from 'react-native';


export default class MeteorsScreen extends React.Component {
  constructor(){
    super()
    this.state={
     apod:{}
    }
  }
  getAPOD=()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=jAla0SLbzblS7tWGt2r7Q0EKHTgig1YhnqamTCMN')
    .then(response=>{
      this.setState({
        apod:response.data
      })
    })
    .catch(error=>{
      alert(error.message)
    })
  }
  componentDidMount({
    
  }){
    this.getAPOD()
  }

  render(){
return(
  <View style={styles.container}>
    <SafeAreaView style={styles.droidsafearea}/>
    <SafeAreaView style={styles.droidsafearea}/>
    <ImageBackground source={require('../assets/img.jpg')} style={styles.backgroundImg}>
  <Text style={styles.routeText}>Astronomy picture of the day</Text>
  <Text style={styles.titleText}>{this.state.apod.title}</Text> 
  <TouchableOpacity style={styles.listContainer}
  onPress={()=> Linking.openURL(this.state.apod.url).catch(err=> console.error('could not load page',err))}
  >
     
  </TouchableOpacity>
  <TouchableOpacity>
    <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
  </TouchableOpacity>
    </ImageBackground>

  </View>
)
  }

  
  
 


  
  }
  const styles=StyleSheet.create({
    droidsafearea:{
      marginTop:Platform.OS==='android'?StatusBar.currentHeight:0
    },
    container:{
     flex:1,
     justifyContent:'center',
      alignItems:'center'
    },
    backgroundImg:{
      flex:1,
      resizeMode:'cover',
      marginBottom:0,
      height:690
    },
    titleText:{
      fontSize:30,
      fontWeight:'bold',
      color:'white',
      alignItems:'center',
      justifyContent:'center'
    },
    
    routeText:{
      fontSize:'10',
      fontWeight:'bold',
      color:'white',
      justifyContent:'center'
    },
    listContainer:{
      justifyContent:'center',
      margin:10,
      borderRadius:10,
      padding:10
    },
    explanationText:{
      fontSize:15,
      justifyContent:'center',
      alignItems:'center',
      color:'white'
    }
  })
