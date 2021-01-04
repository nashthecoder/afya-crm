import React from "react";
import { View, Button, StyleSheet, Text, Image } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source = {require('../assets/images/afya_logo.png')} /> 
      <Text style={styles.text}>CRM</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
      />
  </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  text: {
    fontWeight: "800",
  },
  logo: {
    marginTop: 50,
  }

});

export default Welcome;
