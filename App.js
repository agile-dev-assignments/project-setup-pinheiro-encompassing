import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import ConnectedDevicesContainer from "./app/ConnectedDevicesContainer";
import Login from "./app/LoginScreen";
import ClipboardContainer from "./app/ClipboardContainer";
import LoginScreen from "./app/LoginScreen";
import Navigation from './app/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as firebase from 'firebase';

import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);


//export default function App() {
//   let [visible, setVisible] = useState(true);
//   return visible ? (
//     <SafeAreaView style={styles.container}>
//       <ClipboardContainer onPress={() => setVisible(false)} />
//     </SafeAreaView>
//   ) : (
//     <SafeAreaView style={styles.container}>
//       <LoginScreen onPress={() => setVisible(true)} />
//     </SafeAreaView>
//   );
// }

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
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
