import React,{ Component } from 'react';
import { Text,View,StyleSheet } from 'react-native';
import { MainFeed,Login, Camera, Profile } from './screen';
import { SwitchNavigator,TabNavigator } from 'react-navigation';

const Tabs = TabNavigator({
    camera:  {screen : Camera},
    mainfeed: {screen : MainFeed},
    profile:{screen : Profile},
})

const MainStack = SwitchNavigator({
    login: Login,
    main: {screen : Tabs}
});



export default class InstaClone extends Component{
    

     render(){
         return <MainStack />;
     }
};




