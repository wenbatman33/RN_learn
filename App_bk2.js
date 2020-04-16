import React, { Component } from 'react';
import {Scene, Router} from 'react-native-router-flux';

import Login from './components/Login';
import StartUp from './components/StartUp';

export default class App extends Component{
  constructor (props){
    super(props);
  }
  render(){
    return(
      <Router>
        <Scene key="root">
          <Scene key="startup" component={StartUp} title="StartUp"/>
        </Scene>
      </Router>
    );
  }
}
