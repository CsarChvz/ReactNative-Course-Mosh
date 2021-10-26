import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return <LoginScreen></LoginScreen>;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    padding: 20,
    backgroundColor: "#f8f4f4",
  },
});
