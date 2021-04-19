import React from 'react';
import { Text, View, StatusBar, StyleSheet } from 'react-native';

export default function App(){
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#0071CE"/>
    <View style={style.container}>
      <Text>
        Execution
      </Text>
    </View>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  }
})