import React , {useState , useEffect} from "react";
import { SafeAreaView } from "react-native";
import { View, StyleSheet, Text } from "react-native";
import ClipboardList from "./ClipboardList";
import ConnectedDevicesContainer from "./ConnectedDevicesContainer";
import LogoutButton from "./Logout";
import AsyncStorage from '@react-native-async-storage/async-storage';


const ClipboardContainer = ({navigation}) => {
  const[nameValue , setNameValue] = useState("");

  useEffect(() => {
    getData()
  })

  async function getData(){
  try {
    const value = await AsyncStorage.getItem('@storage_Key')
    if(value !== null) {
      setNameValue(value);
      console.log(value);
    }
  } catch(e) {
    // error reading value
  }
}

  return (
    <SafeAreaView style = {styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.containerHeaderText}>CopyPasta</Text>
        </View>
        <View style={styles.headerText}>
          <Text style={styles.containerSubHeaderText}>sharing. made easy.</Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        <ClipboardList />
        <View style={styles.userInfo}>
          <Text style={styles.containerDetailText}>
            {nameValue} User: #42-314159
          </Text>
        </View>
      </View>
      <ConnectedDevicesContainer />
      <LogoutButton />
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
    fontSize: 10,
    color: "lightgray",
  },
  userInfo: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default ClipboardContainer;
