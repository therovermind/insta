import React,{ Component } from 'react';
import { Text,View,StyleSheet } from 'react-native';
import { MainFeed,Login } from './screen/index';
import { SwitchNavigator,TabNavigator } from 'react-navigation';

const MainStack = SwitchNavigator({
    login: Login,
    main: MainFeed,
   
  });

 class InstaClone extends Component{
    

     render(){
         return <MainStack />;
     }
};

export default InstaClone;


