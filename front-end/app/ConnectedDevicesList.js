import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";

import { Overlay } from "react-native-elements";

const ConnectedDevicesList = ({ buttonPress }) => {
  let [devices, loadDevices] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  const url = "https://my.api.mockaroo.com/devicelist.json?key=2d122c20";
  let mounted = false;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        loadDevices(json);
        console.log(json);
        setIsLoading(false);
      });
  }, []);
  console.log(devices);
  return isLoading ? (
    <Overlay overlayStyle={styles.container}>
      <ActivityIndicator size="large" />
    </Overlay>
  ) : (
    <Overlay overlayStyle={styles.container}>
      <FlatList
        data={devices}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
      ></FlatList>
      <TouchableOpacity style={styles.button} onPress={buttonPress}>
        <Text style={styles.buttonText}>Exit</Text>
      </TouchableOpacity>
    </Overlay>
  );
};

const renderItem = ({ item }) => <Item title={item.title} />;

const Item = ({ title }) => (
  <View style={styles.item}>
    <Image
      source={require("../assets/smartphone.png")}
      style={styles.phoneIcon}
    />
    <Text style={styles.title}> {title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    width: 300,
    borderRadius: 10,
  },
  phoneIcon: {
    width: 25,
    height: 25,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    width: 280,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 10,
  },
  title: {
    fontSize: 12,
  },
  button: {
    backgroundColor: "#01003b",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
  },
});

export default ConnectedDevicesList;
