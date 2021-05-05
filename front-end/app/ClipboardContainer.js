import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import ClipboardList from "./ClipboardList";
import ConnectedDevicesContainer from "./ConnectedDevicesContainer";
import AddToCopyPastaButton from "./AddToCopyPastaButton";
import CopyPastedCode from "./CopyPastedCode";
import LogoutButton from "./Logout";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginScreen from "./LoginScreen";
import { userName } from "./LoginScreen";
import { id } from "./LoginScreen";

const ClipboardContainer = ({ navigation }) => {
  const [nameValue, setNameValue] = useState("");
  const [text,setText] = useState("");  
  const user = userName;
  console.log("MADE IT HERE");
  console.log(id);
  const UID = id;

  useEffect(() => {
    getData();
  });

  async function getData() {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      if (value !== null) {
        setNameValue(value);
        console.log(value);
      }
    } catch (e) {
      // error reading value
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.containerHeaderText}>CopyPasta</Text>
        </View>
        <View style={styles.headerText}>
          <Text style={styles.containerSubHeaderText}>sharing. made easy.</Text>
        </View>
      </View>
      {/* <View
        style={{
          flex: 0.04,
          borderBottomColor: "white",
          borderBottomWidth: 1,
        }}
      /> */}
      <View style={styles.listContainer}>
        <View style={styles.userInfo}>
          <View
            style={{
              flex: 0.5,
            }}
          >
            <Text style={styles.containerDetailText}>Welcome, {user}!</Text>
          </View>
          <View
            style={{
              flex: 0.3,
            }}
          >
            <Text style={styles.containerDetailText}>UID: #{UID}</Text>
          </View>
        </View>
        <TextInput
          autoCorrect={false}
          style={styles.item}
          placeholder="Paste your text here"
          onChangeText={(TextBox) => setText(TextBox)}
          defaultValue={ClipboardList.TextBox}
          clearButtonMode="always"
        ></TextInput>
        <TouchableOpacity style={styles.button}>
         <AddToCopyPastaButton copyText={text}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
         <CopyPastedCode/>
        </TouchableOpacity>
        <ClipboardList />
      </View>
      <ConnectedDevicesContainer />
      <LogoutButton navigation={navigation} />
      <View style={{ flex: 0.05 }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#01003b",
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {
    flex: 1,
  },
  header: {
    flex: 0.18,
    marginBottom: 10,
  },
  headerText: {
    backgroundColor: "#01003b",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  containerHeaderText: {
    fontSize: 48,
    color: "#fff",
  },
  containerSubHeaderText: {
    fontSize: 22,
    color: "#fff",
  },
  containerDetailText: {
    fontSize: 14,
    color: "lightgray",
  },
  userInfo: {
    width: "100%",

    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    minWidth: "85%",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",

    marginHorizontal: 70,
  },
  buttonText: {
    color: "#01003b",
    fontSize: 16,
  },
});

export default ClipboardContainer;
