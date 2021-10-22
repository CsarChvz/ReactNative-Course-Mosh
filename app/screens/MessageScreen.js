import React from "react";
import { FlatList, StyleSheet, Platform, StatusBar } from "react-native";

// Components
import ListItemComponent from "../components/ListItemComponent";
import Screen from "../components/Screen";
// Lista de objetos
const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

function MessageScreen(props) {
  return (
    <Screen>
      {/* Lista simple */}
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItemComponent
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default MessageScreen;
