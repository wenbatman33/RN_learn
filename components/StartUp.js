import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

export default class StartUp extends Component{
  constructor (props){
    super(props);
  }
  render(){
    return(
      <View>
        <View><Image source={require("../assets/images/start.jpg")}/></View>
        <View><Text>start page</Text></View>
      </View>
    );
  }
}

