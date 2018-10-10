import React,{ Component } from 'react';
import { Text,View,Image,StyleSheet,Dimensions } from 'react-native';

export default class InstaClone extends Component{

    constructor(){
        super();
        this.state={
            screenWidth:0
        };
    }

    componentDidMount(){
        this.setState({
            screenWidth: Dimensions.get("window").width
        })
    }

    render(){
        return(
            <View style={{ flex:1, width:100 + '%',height:50 }}>
                <View style={styles.NavigationTap}>
                  <Text>Instagram</Text>
                </View>
                <View style={styles.userBar}  >
                  <View style={{ alignItems:"center",flexDirection:"row"}}>
                     <Image style ={styles.userPic} 
                         source={{uri:"https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?resize=640%2C426"}}
                      />
                     <Text style={{marginLeft:7}} >
                        Ankur singhal
                     </Text>
                  </View>
                  <View><Text style={{fontSize:30, alignItems:"center"}}>...</Text></View>            
                </View>
                <Image 
                  style= { {  width:this.state.screenWidth, height:100  }} 
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
    justifyContent:"space-between",
    paddingHorizontal:10,
    flexDirection:"row"
},

userPic:{
    height:40,
    width:40,
    borderRadius:25
}
});


