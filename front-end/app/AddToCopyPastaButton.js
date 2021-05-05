import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import firebase from "firebase";
import {userID} from "./LoginScreen.js";

const AddToCopyPastaButton = ({ copyText }) => {
  const cl = async () => {
    firebase.database().ref("/users/"+userID).update({clipboard: "TEST"});
    console.log(copyText);
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
