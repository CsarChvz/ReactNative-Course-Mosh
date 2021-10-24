import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AcountScreen from "./app/screens/AcountScreen";
export default function App() {
  return <AcountScreen></AcountScreen>;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    padding: 20,
    backgroundColor: "#f8f4f4",
  },
});
