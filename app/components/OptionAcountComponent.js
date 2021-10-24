import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import { TouchableOpacity } from "react-native-gesture-handler";
function OptionAcountComponent({ title, nameVector, colorBola }) {
  return (
    <TouchableOpacity>
      <View style={styles.contenedorOpcion}>
        <View style={[styles.bola, { backgroundColor: colors[colorBola] }]}>
          <MaterialCommunityIcons
            name={nameVector}
            size={25}
            color={colors.white}
          ></MaterialCommunityIcons>
        </View>
        <View style={styles.textContainer}>
          <AppText style={styles.text}>{title}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  contenedorOpcion: {
    backgroundColor: colors.white,
    flexDirection: "row",
    padding: 15,
  },
  bola: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 20,
  },
  textContainer: {
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  text: {
    fontWeight: "600",
  },
});
export default OptionAcountComponent;
