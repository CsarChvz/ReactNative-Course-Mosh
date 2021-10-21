import React from "react";
import { View, Image, StyleSheet } from "react-native";

// Componente
import AppText from "../components/AppText";
import ListItemComponent from "../components/ListItemComponent";

// Colores
import colors from "../config/colors";

function ListingDetailScreen(props) {
  return (
    <View>
      <Image
        source={require("../assets/jacket.jpg")}
        style={styles.image}
      ></Image>

      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItemComponent
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  userContainer: {
    marginVertical: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  price: {
    marginVertical: 10,
    color: colors.secondary,
    fontWeight: "500",
  },
});
export default ListingDetailScreen;
