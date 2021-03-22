import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";

import ConnectedDevicesContainer from "./app/ConnectedDevicesContainer";
import LoginScreen from "./app/LoginScreen";
import ClipboardContainer from "./app/ClipboardContainer";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#01003b",
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
});
