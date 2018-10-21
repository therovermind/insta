import React ,{ Component } from 'react';
import { Post } from '../presentation';
import { FlatList } from 'react-native';


export default class PostFeed extends Component {

    
    _returnKey(item){
        return item.toString();
    }

    _renderPost({item}){
        return (<Post />);
    };

    render(){

        
        return( 
          <FlatList 
           data= {[
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                19,
                20 ]} 
           ketExtractor={this._returnKey}
           renderItem={this._renderPost}

           
        />
    );
    }

}
