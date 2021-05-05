import React, { useEffect, useState } from "react";
import db from "./firebase.config.js";
import firebase from "firebase";
import Moment from "moment";
import { userID } from "./LoginScreen.js";
import {
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Clipboard,
  SafeAreaView,
  RefreshControl,
} from "react-native";

var uData = "";

const Item = ({ content }) => {
  const writeToClipboard = async () => {
    await Clipboard.setString(content);
    alert("Copied to Clipboard!");
  };
  return (
    <TouchableOpacity style={styles.item} onPress={writeToClipboard}>
      <Text style={styles.clipboardContent}>{content}</Text>
    </TouchableOpacity>
  );
};

const ClipboardList = () => {
  let [data, loadData] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [singleLoad, setSingleLoad] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const temp = [];
  const writeToClipboard = async () => {
    await Clipboard.setString(data);
    alert("Copied to Clipboard!");
  };

  if (singleLoad) {
    firebase
      .database()
      .ref("/users/" + userID)
      .on("value", function (snapshot) {
        uData = snapshot.val()["clipboard"];
        loadData(uData);
        console.log("udata: " + uData);
        setSingleLoad(false);
      });
  }

  console.log("MADE IT HERE");

  firebase
    .database()
    .ref("/users/" + userID)
    .on("value", function (snapshot) {
      uData = snapshot.val()["clipboard"];
      console.log("udata: " + uData);
    });

  const renderItem = ({ item }) => (
    <Item date={item.date} content={item.content} />
  );

  return singleLoad ? (
    <ActivityIndicator size="large" style={{ flex: 0.5 }} />
  ) : (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity style={styles.item} onPress={writeToClipboard}>
        <Text style={styles.clipboardContent}>{data}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    minWidth: "85%",
  },
  date: {
    fontSize: 12,
    color: "darkgray",
  },
  clipboardContent: {
    fontSize: 18,
  },
  list: { flex: 1, marginTop: 10 },
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

export default ClipboardList;
