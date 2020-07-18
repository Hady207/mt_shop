import React, { useContext } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import StoreContext from "../context/StoreContext";
import User from "../components/UsersComponents";

const UsersScreen = ({ route, navigation }) => {
  // const { name } = useContext(StoreContext);
  const { item } = route.params;
  navigation.setOptions({
    title: item.productName,
  });

  return (
    <ScrollView style={styles.screen}>
      <User item={item} navigation={navigation} />
      <User item={item} navigation={navigation} />
      <User item={item} navigation={navigation} />
    </ScrollView>
  );
};

export default UsersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 5,
  },
});
