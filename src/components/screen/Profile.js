import React,{ Component } from 'react';
import { Text,View,StyleSheet,TouchableOpacity } from 'react-native';



export default class Profile extends Component{

     login(){
         this.props.navigation.navigate("camera")
     }

     render(){
         return(
             <TouchableOpacity 
             style={{alignItems:'center'}}
             onPress={
                 ()=>this.login()
                }
             
             >
                 <Text>PROFILE PAGE</Text>
             </TouchableOpacity>
         )
     }
}