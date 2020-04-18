import React, {Component}  from 'react';
import {   
  View,
  Text,
  Platform,
  StyleSheet,
  Dimensions,
} from 'react-native';

export default class MyDemo extends Component{
  constructor (props){
    super(props);
    this.state ={
      dataArray: require("./../../assets/js")
    }
  }

  render(){
    return (
      <View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainViewStyle :{
    flex: 1,
    backgroundColor: '#ccc',
    justifyContent: 'flex-start'
  },
})