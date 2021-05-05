import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import {id} from "./LoginScreen.js";
import firebase from "firebase";
import {userID} from "./LoginScreen.js";

const AddToCopyPastaButton = ({ copyText }) => {
  const cl = async () => {
    console.log("made it here");
    console.log(copyText);
    firebase.database().ref("/users/"+userID).update({clipboard: copyText});
  };
  return (
    <TouchableOpacity style={styles.button} onPress={cl}>
      <Text style={styles.buttonText}>Click to CopyPasta Text Above</Text>
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
export default AddToCopyPastaButton;
