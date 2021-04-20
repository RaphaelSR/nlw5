import React from 'react';
import { Text, View, StatusBar, StyleSheet } from 'react-native';
import Welcome from './src/pages/welcome';

export default function App(){
  return (
  
    /* <StatusBar barStyle="dark-content" backgroundColor="#0071CE"/>
    <View style={style.container}>
      <Text>
        Olá!
      </Text>
      <Text>
        NLW#5
      </Text>
      </View> */
      <Welcome/>
    
  
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  }
})