import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

import { Swipeable } from "react-native-gesture-handler";
function ListItemComponent({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View style={styles.textContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontWeight: "700",
  },
  subTitle: {
    color: colors.medium,
  },
});
export default ListItemComponent;
