import { Jost_500Medium } from "@expo-google-fonts/jost";
import { formatDistance } from "date-fns";
import { pt } from 'date-fns/locale';
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import waterdrop from "../assets/waterdrop.png";
import { Header } from "../components/Header";
import { loadPlant, PlantProps } from "../libs/storage";
import colors from "../styles/colors";

export function MyPlants() {
    const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWaterd, setNextWatered] = useState<string>();

    useEffect(() => {
        async function loadStorageData(){
            const plantsStoraged = await loadPlant();

            const nextTime = formatDistance(
                new Date(plantsStoraged[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                {locale: pt}
            );

            setNextWatered(
                `Não esqueça de regar a  ${plantsStoraged[0].name} à ${nextTime} horas.`
            )

            setMyPlants(plantsStoraged);
            setLoading(false);
        }

        loadStorageData();
    }, [])


  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image source={waterdrop} style={styles.spotlightImage} />
        <Text style={styles.spotlightText}>
          {nextWaterd}
        </Text>
      </View>

        <View style={styles.plants}>
            <Text style={styles.plantsTitle}>
                Próximas regadas
            </Text>
        </View>

        <FlatList 
            data={myPlants}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => (
                <Text>Elemento</Text>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flex: 1}}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingTop: Jost_500Medium,
    backgroundColor: colors.background,
  },
  spotlight: {},
  spotlightImage: {},
  spotlightText: {},
  plants: {},
  plantsTitle: {},
});
