import React,{ Component } from 'react';
import { Text,View,Image,StyleSheet,Dimensions,TouchableOpacity } from 'react-native';
import config from '../../config';

export default class Post extends Component{

    constructor(){
        super();
        this.state={
            liked:false,
            screenWidth: Dimensions.get("window").width
        };
    }

    likedToggled(){
        this.setState({
            liked: !this.state.liked
        });
    }

    

    render(){

        const imageHieght = Math.floor(this.state.screenWidth*1.1);
        const imageURI = "https://lh3.googleusercontent.com/jIORt-l8iFGHbK9RTLVTB19cRW7GgCav40USQn_-jpfsc-21JdhI-A-dBg4Ftt0O6N50WQNK1RBlgPBuT6G7-zUjKw"+ "=s" + imageHieght +"-c";
         
        const heartIconColor= this.state.liked ? "rgb(252,61,57)" : null;

        return(
            
            <View style={{ flex:1, width:100 + '%',height:50 }}>
               
                <View style={styles.userBar}  >
                  <View style={{ alignItems:"center",flexDirection:"row"}}>
                     <Image style ={styles.userPic} 
                         source={{uri:"https://lh3.googleusercontent.com/jIORt-l8iFGHbK9RTLVTB19cRW7GgCav40USQn_-jpfsc-21JdhI-A-dBg4Ftt0O6N50WQNK1RBlgPBuT6G7-zUjKw=s1024"}}
                      />
                     <Text style={{marginLeft:7}} >
                        Ankur singhal
                     </Text>
                  </View>
                  <View>
                      <Text style={{fontSize:30, alignItems:"center"}}>...</Text>
                  </View>            
                </View>
                <TouchableOpacity 
                     activeOpacity={0.9}
                     onPress={()=>{this.likedToggled()}}>
                <Image 
                  style= { {  width:this.state.screenWidth, height:imageHieght  }} 
                  source = {{uri:imageURI }} 
                />
                </TouchableOpacity>
                <View style={styles.iconBar} >
                  <Image style ={[styles.icon,{height:40,width:40,tintColor:heartIconColor }]}
                         source={config.images.heartIcon} 
                    />
                  <Image style ={[styles.icon,{height:40,width:38}]} 
                         source={config.images.bubbleIcon} 
                    />
                  <Image style ={[styles.icon,{height:38,width:38}]}
                         source={config.images.arrowIcon} 
                    />

                </View>
                <View style={styles.commentBar}>
                    <Image style ={[styles.icon,{height:30,width:30}]}
                         source={config.images.heartIcon} 
                    />
                    <Text>128 Likes</Text>
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

    },
   userBar:{
    height:config.stlyleConstant.rowHeight,
    width:100+'%',
    justifyContent:"space-between",
    paddingHorizontal:10,
    flexDirection:"row"
   },

   userPic:{
    height:40,
    width:40,
    borderRadius:25
   },

   iconBar:{
       height: config.stlyleConstant.rowHeight,
       borderBottomWidth : StyleSheet.hairlineWidth,
       borderTopWidth: StyleSheet.hairlineWidth,
       borderColor:"rgb(233,233,233)",
       flexDirection:"row",
       alignItems:"center"
   },

   icon:{
       marginLeft:10,
       },
    
    commentBar:{
        width: 100 + "%",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: "rgb(233,233,233)",
        height: config.stlyleConstant.rowHeight,
        flexDirection:"row",
        alignItems:"center"
    }
})