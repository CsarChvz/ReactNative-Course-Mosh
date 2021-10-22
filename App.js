import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MessageScreen from "./app/screens/MessageScreen";
import "react-native-gesture-handler";
export default function App() {
  return <MessageScreen></MessageScreen>;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    padding: 20,
    backgroundColor: "#f8f4f4",
  },
});
