import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";

export default function App() {
  const [isNew, setisNew] = useState(false);

  return (
    <Screen>
      <AppPicker placeholder="Category" icon="apps"></AppPicker>
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
