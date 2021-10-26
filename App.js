import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
  { label: "Fucking", value: 4 },
];

export default function App() {
  const [isNew, setisNew] = useState(false);

  return (
    <Screen>
      <AppPicker
        items={categories}
        placeholder="Category"
        icon="apps"
      ></AppPicker>
      <AppTextInput placeholder="Email" icon="email"></AppTextInput>
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
