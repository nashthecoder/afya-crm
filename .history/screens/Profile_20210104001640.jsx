import React from "react";
import { View, Button, StyleSheet, Text, Image } from "react-native";
import { Header } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text>Testing</Text>
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
    marginTop: 75,
    backgroundColor: "white",
    borderRadius: 5,
  },
  text: {
    fontWeight: "800",
  }

});

export default Welcome;
