import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>


    </View>>

    
    <View style={styles.center}>
      <Text style={styles.text}>About Page</Text>
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
