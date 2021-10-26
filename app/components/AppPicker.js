import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../components/AppText";

import colors from "../config/colors";
import stylesGlobal from "../config/stylesGlobal";
function AppPicker({ icon, placeholder, ...others }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <AppText style={styles.text}>{placeholder}</AppText>
      <MaterialCommunityIcons
        name="chevron-down"
        size={20}
        color={colors.medium}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",

    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});
export default AppPicker;
