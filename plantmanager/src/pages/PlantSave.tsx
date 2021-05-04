import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
  Button,
} from "react-native";
import { SvgFromUri } from "react-native-svg";
import waterdrop from "../assets/waterdrop.png";
import colors from "../styles/colors";

export function PlantSave() {
  return (
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri uri="" height={150} width={150} />

        <Text style={styles.plantName}>Nome da Planta</Text>

        <Text style={styles.plantAbout}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, enim.
          Aspernatur, blanditiis quas facilis quaerat, animi illo reiciendis,
          exercitationem eveniet ad minima fuga soluta esse cupiditate iste amet
          adipisci aliquam?
        </Text>
      </View>

      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image source={waterdrop} style={styles.tipImage} />
          <Text style={styles.tipText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            temporibus tenetur assumenda sed obcaecati placeat sapiente illo
            facere totam sit quo eligendi sequi aut quod, molestiae nostrum
            eius! Cum, deserunt.
          </Text>
        </View>
        <Text style={styles.alertLabel}>
            Escolha o melhor horário para ser lembrado:
        </Text>

        <Button
            title="Cadastrar planta"
            onPress={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.shape,
  },
  plantName: {},
  plantInfo: {},
  plantAbout: {},
  controller: {},
  tipContainer: {},
  tipImage: {},
  tipText: {},
  alertLabel: {},
});
