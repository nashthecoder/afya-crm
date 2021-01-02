import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const About = () => {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>About Page</Text>
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

export default About;
