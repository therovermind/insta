import React,{ Component } from 'react';
import { Text,View,Image,StyleSheet,Dimensions,TouchableOpacity } from 'react-native';
import config from '../config';

export default class InstaClone extends Component{

    render(){

        
        return(
            
            <View style={{ flex:1, width:100 + '%',height:50 }}>
                <View style={styles.NavigationTap}>
                  <Text>Instagram</Text>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    NavigationTap : {
        height:45,
        width:100+'%',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'rgb(250,250,250)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor:'rgb(233,233,233)'

    }
})


