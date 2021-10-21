import React from "react";
import { Text, StyleSheet, ImageBackground, View, Image } from "react-native";
import logo from "../assets/logo-red.png";

// Componentes
import ButtonComponet from "../components/ButtonComponet";
function WelcomeScreen(props) {
  return (
    // Contenedor padre
    <ImageBackground
      blurRadius={10}
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      {/* Contenedor de logo */}
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.tagLine}>Sell what you dont want</Text>
      </View>

      {/* Contendor botones */}
      <View style={styles.contenedorBotones}>
        {/* Botones de Login y Register */}
        <ButtonComponet title="login"></ButtonComponet>
        <ButtonComponet title="register" color="secondary"></ButtonComponet>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 50,
  },
  logo: {
    width: 70,
    height: 70,
  },
  contenedorBotones: {
    flex: 1,
    justifyContent: 'flex-end',
    width: "100%",
    paddingHorizontal: 20
  },
  tagLine: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 20,
  }
});
export default WelcomeScreen;
