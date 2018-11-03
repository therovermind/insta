import React,{ Component } from 'react';
import { Text,View,StyleSheet,TouchableOpacity } from 'react-native';


export default class Login extends Component{

     login(){
         alert("baja daala")
     }

     render(){
         return(
             <TouchableOpacity 
             style={{alignItems:'center'}}
             onPress={
                 ()=>this.login()
                }
             
             >
                 <Text>LOGIN PAGE</Text>
             </TouchableOpacity>
         )
     }
}