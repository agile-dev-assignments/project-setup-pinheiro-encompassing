import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import * as firebase from 'firebase';

const LogoutButton = () => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => firebase.auth().signOut()}
    >
      <Text style={styles.text}>Logout</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 40,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignSelf: "center",
    overflow: "hidden",
  },
  text: {
    color: "#01003b",
    fontSize: 15,
    alignSelf: "center",
  },
});

export default LogoutButton;
