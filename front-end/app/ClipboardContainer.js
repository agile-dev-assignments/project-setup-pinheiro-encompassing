import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { View, StyleSheet, Text } from "react-native";
import ClipboardList from "./ClipboardList";
import ConnectedDevicesContainer from "./ConnectedDevicesContainer";
import LogoutButton from "./Logout";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ClipboardContainer = ({ navigation }) => {
  const [nameValue, setNameValue] = useState("");
  const user = "Rahat Hossan";
  const UID = "42-314159";

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
      <View
        style={{
          flex: 0.04,
          borderBottomColor: "white",
          borderBottomWidth: 1,
        }}
      />
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
        <ClipboardList />
      </View>
      <ConnectedDevicesContainer />
      <LogoutButton />
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
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default ClipboardContainer;
