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
import { set } from "react-native-reanimated";

var uData = "";

const Item = ({ item }) => {
  console.log("current item is="+JSON.stringify(item));
  console.log(JSON.stringify(item));
  const writeToClipboard = async () => {
    console.log("you saw me in write to clipboard!!!");
    await Clipboard.setString(item);
    alert("Copied to Clipboard!");
  };
  return (
    <TouchableOpacity style={styles.item} onPress={writeToClipboard}>
      <Text style={styles.clipboardContent}>{JSON.stringify(item).slice(1, -1)}</Text>
    </TouchableOpacity>
  );
};

const ClipboardList = () => {
  let [data, loadData] = useState([]);  
  let [isLoading, setIsLoading] = useState(true);
  let [refreshing, setRefreshing] = React.useState(false);
  var dataList = [];
  const onRefresh = () => {
    console.log("refresh start");
    console.log(dataList);
    setIsLoading(true);
    firebase
      .database()
      .ref("/users/" + userID+"/clipboard")
      .on("value", function (snapshot) {
        dataList = [];
        snapshot.forEach(function(data) {
          console.log(data);
          dataList.push(data);
        })
      });
    dataList = dataList.reverse();
    setIsLoading(false);
    console.log("refresh complete");
    console.log(dataList);
  };
  let [singleLoad, setSingleLoad] = useState(true);


  if (singleLoad) {
    console.log("beginload");
    firebase
      .database()
      .ref("/users/" + userID+"/clipboard")
      .on("value", function (snapshot) {
        dataList = [];
        snapshot.forEach(function(data) {
          console.log(data);
          dataList.push(data);
        })
        // uData = snapshot.val()["clipboard"];
        // console.log("udata: " + uData);
        // setSingleLoad(false);
      });
  }
  dataList = dataList.reverse();
  console.log(dataList.length);
  console.log("MADE IT HERE");

  // firebase
  //   .database()
  //   .ref("/users/" + userID)
  //   .on("value", function (snapshot) {
  //     uData = snapshot.val()["clipboard"];
  //     console.log("udata: " + uData);
  //   });

  const renderItem = ({ item }) => {
    return (<Item item={item}/>);
  };
  console.log("single load is "+ singleLoad);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <TouchableOpacity style={styles.item} onPress={writeToClipboard}> */}
        <FlatList
          data={dataList}
          renderItem={renderItem}
          style={styles.list}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      {/* </TouchableOpacity> */}
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
