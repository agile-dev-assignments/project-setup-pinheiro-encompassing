import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import db from "./firebase.config.js";
import {id} from "./LoginScreen.js";
import firebase from "firebase";
import {userID} from "./LoginScreen.js";

var uData = "";

firebase.database().ref("/users/"+userID).on("value", function(snapshot) {
  console.log(snapshot.val()["clipboard"]);
  uData = snapshot.val()["clipboard"];
});
console.log("MADE IT HERE");

const CopyPastedCode = ({ copyText }) => {
  const cl = async () => {

    firebase.database().ref("/users/"+userID).on("value", function(snapshot) {
      uData = snapshot.val()["clipboard"];
    });
    
    console.log(uData);
  };
  return (
    <TouchableOpacity style={styles.button} onPress={cl}>
      <Text style={styles.buttonText}>Copypastad text</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: "#01003b",
  },
});
export default CopyPastedCode;
