import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";

import { createStore, combineReducer } from "redux";
// import { Provider } from "react-redux";

import StackNavigation from "./navigations/StackNavigation";
// import authReducer from "./store/reducers/auth";
// import { Store } from "./context/StoreContext";

// const rootReducer = combineReducer({
//   auth: authReducer,
// });

// const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const name = "Hadi Maher";
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  return (
    <NavigationContainer>
      {/* <Provider store={store}> */}
      <StackNavigation />
      {/* </Provider> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
