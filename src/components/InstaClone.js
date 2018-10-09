import React,{ Component } from 'react';
import { Text,View,Image,StyleSheet } from 'react-native';

export default class InstaClone extends Component{
    render(){
        return(
            <View style={{ flex:1, width:100 + '%',height:50 }}>
                <View style={styles.NavigationTap}>
                  <Text>Instagram</Text>
                </View>
                <View style={styles.userBar}  >
                  
                  <Image style ={{height:50+'%', width:40}} source={{uri:"https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?resize=640%2C426"}}/>
                  <Text style={{flex:1}}>
                      Ankur singhal
                  </Text>
          
                </View>
                <Image 
                  style= { {  width:100 + '%', height:100  }} 
                  source = {{uri:"https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?resize=640%2C426" }} 
                />
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

},
userBar:{
    height:50,
    width:100+'%',
    justifyContent:"center",
    alignItems:'center',
    flexDirection:"row"

}
});


