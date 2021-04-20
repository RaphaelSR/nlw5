import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import wateringImg from '../assets/watering.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';

export default function Welcome(){
    const [visible, setVisible] = useState(false);

    function handleVisibility(){
        visible === true ? setVisible(false) : setVisible(true)      
        
    }

    return(

    <SafeAreaView style={style.container}>
        <Text style={style.title}>
            Gerencie {'\n'}
            suas plantas {'\n'}
            de forma fácil
        </Text>

        {   
            visible &&
            <Image source={wateringImg} style={style.image}/>
        }

        <Text style={style.subtitle}>
            Não esqueça mais de regar suas plantas.
            Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <Button title="Avançar" onPress={handleVisibility}/>
      
    </SafeAreaView>
    )
}


const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between', 
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 20,
        color: colors.heading,
    },
    image: {
        width: 292,
        height: 284
    },
  })