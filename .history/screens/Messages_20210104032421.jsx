import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Header, Title, Body, Content } from "native-base";
import DatePicker from "../component/DatePicker";

const Messages = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Header>
      <Title>Inbox</Title>
    </Header>
      <Button
        title="Open preferred message application"
        onPress={() => navigation.navigate("DraftMessage")}
      />
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
