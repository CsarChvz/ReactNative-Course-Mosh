import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";

// Componentes
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import ButtonComponet from "../components/ButtonComponet";

function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Screen>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logo}
        ></Image>
        <View style={styles.formContainer}>
          <AppTextInput
            placeholder="Email"
            icon="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            onChangeText={(text) => setEmail(text)}
          />
          <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            textContentType="password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <View style={styles.buttonContainer}>
            <ButtonComponet
              title="Login"
              onPress={() => console.log(email, password)}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  formContainer: {
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
  buttonContainer: {
    paddingVertical: 30,
    width: "70%",
  },
});
export default LoginScreen;
