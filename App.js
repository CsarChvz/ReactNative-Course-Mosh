import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CardComponent from "./app/components/CardComponent";
export default function App() {
  return (
    <View style={styles.container}>
      <CardComponent
        title="Red Jacket"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    padding: 20,
    backgroundColor: "#f8f4f4",
  },
});
