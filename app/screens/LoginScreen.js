import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Formik } from "formik";

// Componentes
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import ButtonComponet from "../components/ButtonComponet";

function LoginScreen(props) {
  return (
    <Screen>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logo}
        ></Image>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleSubmit }) => (
            <>
              <View style={styles.formContainer}>
                <AppTextInput
                  placeholder="Email"
                  icon="email"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  onChangeText={handleChange("email")}
                />
                <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="lock"
                  placeholder="Password"
                  textContentType="password"
                  secureTextEntry={true}
                  onChangeText={handleChange("password")}
                />
                <View style={styles.buttonContainer}>
                  <ButtonComponet title="Login" onPress={handleSubmit} />
                </View>
              </View>
            </>
          )}
        </Formik>
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
