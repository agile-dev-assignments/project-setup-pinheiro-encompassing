import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";

const Item = ({ date, content }) => (
  <View style={styles.item}>
    <Text style={styles.date}>{date}</Text>
    <Text style={styles.clipboardContent}>{content}</Text>
  </View>
);

const ClipboardList = () => {
  const url = "https://my.api.mockaroo.com/clipboardcontent.json?key=06f36ef0";
  let [data, loadData] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  const renderItem = ({ item }) => (
    <Item date={item.date} content={item.content} />
  );
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        loadData(json);
        console.log(json);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <ActivityIndicator size="large" />
  ) : (
    <FlatList
      data={data}
      renderItem={renderItem}
      style={styles.list}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  date: {
    fontSize: 12,
    color: "darkgray",
  },
  clipboardContent: {
    fontSize: 18,
  },
  list: { flex: 1 },
});

export default ClipboardList;
