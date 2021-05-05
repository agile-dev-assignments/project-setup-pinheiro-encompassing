import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import db from "./firebase.config.js";
import {id} from "./LoginScreen.js";
import firebase from "firebase";
import {userID} from "./LoginScreen.js";



const AddToCopyPastaButton = ({ copyText }) => {
  const cl = async () => {
    //SEND DATA TO FIREBASE HERE

    console.log("DATABASE working");
    console.log(db);
    console.log("ID");
    console.log(id);
    console.log(copyText);
    console.log(userID);
    firebase.database().ref("/users/"+userID).update({clipboard: copyText});

    console.log("DOES IT MAKE IT HERE? LETS FIND OUT");

    //var users = db.ref("users");
    console.log(id);

    //users.orderByChild("id").on("");

    // ref.orderByChild("dimensions/height").on("child_added", function(snapshot) {
    //   console.log(snapshot.key + " was " + snapshot.val().height + " meters tall");
    // });

    // try {
    //   things.add({
    //     content: "the other sample data",
    //     date: Date.now(),
    //     key: 1,
    //     name: "tomato",
    //     title: "ball",
    //   });
    // } catch (err) {
    //   console.log(err);
    // }

    // console.log(copyText);
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
