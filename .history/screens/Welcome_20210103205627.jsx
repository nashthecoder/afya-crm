import React from "react";
import { View, Button, StyleSheet, Text, Image } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <Image source = {require('../assets/images/afya_logo.png')} /> 
      <Text style={styles.text}>CRM</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
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
    backgroundColor: "white",
  },
  text: {
    fontWeight: "800",
  }

});

export default Welcome;
