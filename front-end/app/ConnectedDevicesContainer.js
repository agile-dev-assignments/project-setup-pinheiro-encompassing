import React, { useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import ConnectedDevicesButton from "./ConnectedDevicesButton";
import ConnectedDevicesList from "./ConnectedDevicesList";

const ConnectedDevicesContainer = () => {
  const [showList, setShowList] = useState(false);

  return showList ? (
    <ConnectedDevicesList
      buttonPress={() => {
        setShowList(false);
      }}
    />
  ) : (
    <View style={styles.bottom}>
      <ConnectedDevicesButton onPress={() => setShowList(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    flex: 0.5,
    justifyContent: "flex-end",
    marginBottom: 36,
  },
});

export default ConnectedDevicesContainer;
