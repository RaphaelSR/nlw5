import React from 'react';
import AppLoading from 'expo-app-loading';
import { Text, StyleSheet, View } from 'react-native';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';
import Routes, {} from './src/routes';

export default function App(){
  const [fontsLoaded] = useFonts ({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fontsLoaded)
  return <AppLoading/>

  return (
    <Routes/>
  )

}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  }
})
