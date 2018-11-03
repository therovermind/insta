import React,{ Component } from 'react';
import { Text,View,StyleSheet,TouchableOpacity } from 'react-native';



export default class Login extends Component{

     login(){
         this.props.navigation.navigate("main")
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