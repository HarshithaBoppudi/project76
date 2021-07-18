import * as React from 'react';
import { View, StyleSheet, Button,TextInput,Text,TouchableOpacity,Image,Icon ,SafeAreaView,Platform,FlatList} from 'react-native';
import {Header} from 'react-native-elements';
import axios from 'axios'

export default class SpaceCraftsScreen extends React.Component {
constructor(){
  super()
  this.state={
    aircrafts:''
  }
}
 getData=()=>{
    axios.get('https://ll.thespacedevs.com/2.0.0/config/spacecraft/')
    .then(response=>{
      this.setState({
        aircrafts:response.data.results
      })
    })
    .catch(error=>{
      alert(error.message)
    })
  }
  componentDidMount(){
    this.getData()
  }
  keyExtractor=(item,index)=>{
    index.toString()
    
  }
    renderItem=({item})=>{
        return(
          <View style={{borderWidth:1,justifyContent:'center',alignItems:'center',marginBottom:10,elevation:10}}>
             <Image
             source={{uri:item.agency.image_url}} 
             style={{width:'100%',height:200,marginBottom:15,marginTop:15,marginRight:10}}
             />
             <Text style={{fontSize:20,fontWeight:'bold'}}>{item.name}</Text>
             <Text style={{color:'#696969'}}>{item.agency.name}</Text> 
             <Text>DESCRIPTION</Text>
             <Text style={{color:'#A9A9A9',marginLeft:10,marginRight:10}}>{item.agency.description}</Text>  
             
          </View>
        )


        
      }
render(){
  
    return(
      <View style={{flex:1}}>
        <SafeAreaView style={styles.areaView}/>
        <FlatList
        keyExtractor={this.keyExtractor}
        data={this.state.aircrafts}
        renderItem={this.renderItem}
        horizontal={true}
        />
      </View>
    )  
  

       
    }
    

   
    }
    const styles=StyleSheet.create({
      areaView:{
        marginTop:Platform.OS==='android'?StatusBar.currentHeight:0
      },   
    })




