import React from "react";
import { View, Button, StyleSheet, Text, TextInput, Image } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login page</Text>
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
},
  text: {
    fontWeight: "800",
  }

});

export default Login;
