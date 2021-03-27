import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import ConnectedDevicesContainer from "./app/ConnectedDevicesContainer";
import Login from "./app/LoginScreen";
import ClipboardContainer from "./app/ClipboardContainer";
import LoginScreen from "./app/LoginScreen";
//import * as GoogleSignIn from 'expo-google-sign-in';
import * as Google from 'expo-google-app-auth';

async function signInWithGoogleAsync() {
  try {
    const result = await Google.logInAsync({
      androidClientId: "978388863015-7ilvtnu772i66f22vj5t1d3enli35h8u.apps.googleusercontent.com",
      iosClientId: "978388863015-4h47p1bsiaim8kktofqk9ssual0as82q.apps.googleusercontent.com",
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
}

export default function App() {
  let [visible, setVisible] = useState(true);
  return visible ? (
    <SafeAreaView style={styles.container}>
      <ClipboardContainer onPress={() => setVisible(false)} />
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.container}>
      <LoginScreen onPress={() => setVisible(true)} />
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
