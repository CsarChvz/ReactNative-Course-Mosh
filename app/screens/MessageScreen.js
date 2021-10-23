import React, { useState } from "react";
import { FlatList, StyleSheet, Platform, View } from "react-native";

// Components
import ListItemComponent from "../components/ListItemComponent";
import ListItemSeparatonComponent from "../components/ListItemSeparatonComponent";
import Screen from "../components/Screen";
import colors from "../config/colors";

import ListItemDeleteAction from "../components/ListItemDeleteAction";
// Lista de objetos
const initialMessages = [
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
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/mosh.jpg"),
  },
];

function MessageScreen(props) {
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
    console.log(messages);
  };
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
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => (
          <ListItemSeparatonComponent></ListItemSeparatonComponent>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default MessageScreen;
