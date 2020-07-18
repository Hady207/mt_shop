import React from "react";
import {
  StyleSheet,
  Platform,
  Image,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { Avatar } from "react-native-paper";

import RobotoText from "../components/RobotText";

const ItemsComponent = (props) => {
  const { data, navigation } = props;
  let Touch =
    Platform.OS && Platform.Version > 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  return (
    <Touch onPress={() => navigation.navigate("Users", { item: data })}>
      <View style={styles.component}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: data.image }} />
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.productInfo}>
            <RobotoText style={styles.pdName}>{data.productName}</RobotoText>
            <RobotoText style={styles.pdPrice}>${data.price}</RobotoText>
          </View>
          <View style={styles.usersImages}>
            <Avatar.Image
              size={23}
              style={{ resizeMode: "contain" }}
              source={require("../assets/profile.png")}
            />
            <Avatar.Image
              size={23}
              style={{ resizeMode: "contain" }}
              source={require("../assets/profile.png")}
            />
            <Avatar.Image
              size={23}
              style={{ resizeMode: "contain" }}
              source={require("../assets/profile.png")}
            />
            <Avatar.Image
              size={23}
              style={{ resizeMode: "contain" }}
              source={require("../assets/profile.png")}
            />
            <Avatar.Image
              size={23}
              style={{ resizeMode: "contain" }}
              source={require("../assets/profile.png")}
            />
          </View>
        </View>
      </View>
    </Touch>
  );
};

export default ItemsComponent;

const styles = StyleSheet.create({
  component: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 6,
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 7,
  },
  imageContainer: {
    height: 120,
    width: 120,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    resizeMode: "cover",
  },

  bodyContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#ede7f6",
  },
  productInfo: {
    flex: 1,
    width: "100%",
    // backgroundColor: "red",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  pdName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  pdPrice: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 17,
    fontStyle: "italic",
  },
  usersImages: {
    flex: 1,
    // backgroundColor: "#ede7f6",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
