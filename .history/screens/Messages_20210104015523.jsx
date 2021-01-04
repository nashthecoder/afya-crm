import React from "react";
import { View, StyleSheet, Text } from "react-native";
import DatePicker from "../component/DatePicker"

const Messages = () => {
  return (
    <View style={styles.center}>
      <Text>This is the messages screen</Text>
        <DatePicker />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Messages;
