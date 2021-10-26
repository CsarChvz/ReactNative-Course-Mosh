import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import Screen from "./app/components/Screen";

export default function App() {
  const [isNew, setisNew] = useState(false);

  return (
    <Screen>
      <Switch value={isNew} onValueChange={(newValue) => setisNew(newValue)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    padding: 20,
    backgroundColor: "#f8f4f4",
  },
});
