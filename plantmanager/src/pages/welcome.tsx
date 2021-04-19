import react from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Welcome(){
    return(
        <View>
            <Text style={style.headtext}>
                Grencie suas plantas de forma fácil
            </Text>
        </View>
    )
}


const style = StyleSheet.create({
    headtext: {
        fontSize: 32px,
        lineHeight: 38px,
        Align: 'Center',
        VerticalAlign: 'Top',
    }
  })