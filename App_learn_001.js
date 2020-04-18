import React from 'react';
import {   
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  Platform
} from 'react-native';

const App = () => { 
  return (
    <> 
      <StatusBar barStyle="dark-content"></StatusBar>
      <SafeAreaView style={styles.mainViewStyle}>
        <View style={styles.Row}>
          <Text>
            螢幕寬度： {Dimensions.get('window').width+'\n'}
            螢幕高度： {Dimensions.get('window').height+'\n'}
            螢幕分辨率： {Dimensions.get('window').scale+'\n'}
            平台： {Platform.OS}
          </Text>
        </View>
        <View style={styles.Row}>
          <View style={styles.bk01}>
            <Text>BLOCK 01</Text>
          </View>
          <View style={styles.bk02}>
            <Text>BLOCK 02</Text>
          </View>
          <View style={styles.bk03}>
            <Text>BLOCK 03</Text>
          </View>
          <View style={styles.bk04}>
            <Text>BLOCK 04</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  mainViewStyle :{
    flex: 1,
    backgroundColor: '#ccc',
    justifyContent: 'flex-start'
  },
  Row :{
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  bk00: {
    flex:20,
    height:100,
  },
  bk01: {
    width:80,
    height:100,
    backgroundColor:'green',
    justifyContent: 'center'
  },
  bk02: {
    width:100,
    height:100,
    backgroundColor:'purple',
    justifyContent: 'center'
  },
  bk03: {
    width:90,
    height:100,
    backgroundColor:'cyan',
    justifyContent: 'center'
  },
  bk04: {
    width:120,
    height:100,
    backgroundColor:'orange',
    justifyContent: 'center'
  }
})
export default App;