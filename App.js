import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
export default function App() {
  return <ListingDetailScreen></ListingDetailScreen>;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    padding: 20,
    backgroundColor: "#f8f4f4",
  },
});
