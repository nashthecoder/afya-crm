import React from "react";
import { View, Button, StyleSheet, Text, Image } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View style={styles.center}>
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

export default Login;
