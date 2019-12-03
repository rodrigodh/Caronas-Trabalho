import React, { useState } from "react";
import { StatusBar, Platform } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Routes from "./src/routes";

import { YellowBox } from "react-native";

function loadFonts() {
  if (Platform.OS === "ios") {
    return Font.loadAsync({
      "Gotham-Bold": require("./assets/gotham_ssv/Gotham-Bold.otf"),
      "Gotham-Light": require("./assets/gotham_ssv/Gotham-Light.otf")
    });
  }
  return Font.loadAsync({
    "Gotham-Bold": require("./assets/gotham_ssv/GothamBold.ttf"),
    "Gotham-Light": require("./assets/gotham_ssv/GothamLight.ttf")
  });
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  YellowBox.ignoreWarnings(["Unrecognized WebSocket", "Warning: Can't perform a React state update on an unmounted component."]);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }

  return (
    <>
      <StatusBar backgroundColor="#ED4C67" barStyle="light-content" />
      <Routes />
    </>
  );
}
