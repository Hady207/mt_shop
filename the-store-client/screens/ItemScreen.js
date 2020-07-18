import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ItemScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{ uri: product.imageUrl }}
          style={styles.image}
        >
          <View style={styles.backgroundText}>
            <MyText style={styles.title}>{product.title}</MyText>
            <MyText style={styles.price}>{product.price}</MyText>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.boxContainer}>
       <Button title='Chat with the admin'/>
      </View>
    </View>
  );
};

export default ItemScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flexDirection: "row",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  backgroundText: {
    backgroundColor: "rgba(0,0,0,0.4)",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
  },
  price: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  boxContainer: {
    flex: 1,
  },
  box: {
    flex: 1,
    padding: 10,
    borderRadius: 15,
    // alignItems: "center",
    justifyContent: "space-evenly",
  },
  desc: {
    fontSize: 16,
  },
});

