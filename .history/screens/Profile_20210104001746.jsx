import React from "react";
import { View, Button, StyleSheet, Text, Image } from "react-native";
import { Title } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Title>Testing</Title>
        <Button
          title="Add Profile"
          onPress={() => navigation.navigate("ReportFinancial")}
        />
      </ScrollView>
      
      {/* <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
      /> */}
  </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 80,
    backgroundColor: "white",
    borderRadius: 5,
  },
  text: {
    fontWeight: "800",
  }

});

export default Welcome;
