import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Screen from "../components/Screen";

// Componentes
import ListItemComponent from "../components/ListItemComponent";
import OptionAcountComponent from "../components/OptionAcountComponent";
function AcountScreen(props) {
  return (
    <Screen color="light">
      {/* Donde van todos los componentes */}
      <ListItemComponent
        title="Mosh Hamedani"
        subTitle="programmingwithmosh@gmail.com"
        image={require("../assets/mosh.jpg")}
        color="white"
      ></ListItemComponent>
      <View style={styles.uwu}>
        <OptionAcountComponent
          title="My Listings"
          nameVector="format-list-bulleted"
          colorBola="primary"
        ></OptionAcountComponent>
        <OptionAcountComponent
          title="My Messages"
          nameVector="email"
          colorBola="secondary"
        ></OptionAcountComponent>
      </View>

      <View style={styles.logOut}>
        <OptionAcountComponent
          title="Log Out"
          nameVector="logout"
          colorBola="yellow"
        ></OptionAcountComponent>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  uwu: {
    marginTop: 10,
  },
  logOut: {
    marginTop: 20,
  },
});
export default AcountScreen;
