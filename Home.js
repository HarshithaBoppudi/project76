import * as React from 'react';
import { View, StyleSheet, Button,TextInput,Text,TouchableOpacity,StatusBar,SafeAreaView, Platform ,ImageBackground,Image} from 'react-native';


export default class HomeScreen extends React.Component {
render(){
  return(
    <View style={{flex:1}}>
<SafeAreaView style={styles.areaView}/>
        <ImageBackground source={require('../assets/images.jpg')} style={styles.backgroundImage}>
           <View style={{flex:0.5,justifyContent:'center',alignItems:'center'}}>
    <Text style={{fontSize:30,fontWeight:'bold',color:'white',justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
      Stellar App</Text>
      </View>
<View style={{flex:0.7,justifyContent:'center'}}>
    <TouchableOpacity style={styles.button} 
    onPress={()=>{this.props.navigation.navigate('DialyPic')}}>
   
      <Text style={styles.buttonText}>
  Dialy Pics
      </Text>
      <Text style={styles.knoeMore}>{'Know More--->'}</Text>
        
        <Text style={styles.bgDigit}>1</Text>
        <Image source={require('../assets/camera.jpg')} style={styles.iconImg}/>
    </TouchableOpacity>
    </View>
    <View style={{flex:1,justifyContent:'center'}}>

    <TouchableOpacity style={styles.button}
     onPress={()=>{this.props.navigation.navigate('SpaceCrafts')}}
    >
   
      <Text style={styles.buttonText}>
        Space Crafts
      </Text>
      <Text style={styles.knoeMore}>{'Know More--->'} </Text>
        <Text style={styles.bgDigit}>2</Text>
        <Image source={require('../assets/rocket.jpeg')} style={styles.iconImg}/>
    </TouchableOpacity>
    </View>
    <View style={{flex:1,justifyContent:'center'}}>

    <TouchableOpacity style={styles.button}
     onPress={()=>{this.props.navigation.navigate('StarMap')}}
    >
   
      <Text style={styles.buttonText}>
      Star Map
      </Text>
      <Text style={styles.knoeMore}>{'Know More--->'}</Text>
        <Text style={styles.bgDigit}>3</Text>
        <Image source={require('../assets/star.png')} style={styles.iconImg}/>
    </TouchableOpacity>
    </View>
    
    </ImageBackground>
    </View>
  )
}

}
const styles=StyleSheet.create({
  areaView:{
    marginTop:Platform.OS==='android'?StatusBar.currentHeight:0
  },
  button:{
    height:150,
    width:500,
    marginLeft:50,
    marginTop:50,
    marginRight:50,
    borderRadius:30,
    backgroundColor:'white'
  },
  buttonText:{
    fontSize:25,
    fontWeight:'bold',
    color:'black',
    marginTop:75,
    paddingLeft:30
  },
  backgroundImage:{
    flex:1,
    resizeMode:'cover',
    marginBottom:0,
    height:690
  },
  knoeMore:{
    paddingLeft:30,
    color:'purple',
    fontSize:15
  },
  bgDigit:{
    position:'absolute',
    color:'red',
    fontSize:100,
    right:20,
    bottom:-15,
    zIndex:-1
  },
  iconImg:{
    position:'absolute',
    height:100,
    width:150,
    resizeMode:'contain',
    right:50,
    top:-30
  }
})