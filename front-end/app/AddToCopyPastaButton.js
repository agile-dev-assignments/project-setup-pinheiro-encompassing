import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
const AddToCopyPastaButton = ({ copyText }) => {
  const cl = async () => {
    //SEND DATA TO FIREBASE HERE
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
