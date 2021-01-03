import React from "react";
import { View, Button, StyleSheet, Text, TextInput, Image } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source = {require('../assets/images/afya_logo.png')} />  
        <Text style={styles.txtHello}>Sign in</Text> 
      </View>
      <View>
        <Button
          title="Submit"
          onPress={() => navigation.navigate("Modules")}
        />
      </View>
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
    borderRadius: 5
},
  text: {
    fontWeight: "800",
  }

});

export default Login;
