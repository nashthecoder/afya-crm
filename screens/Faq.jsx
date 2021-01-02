import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Faq = () => {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Faq page</Text>
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

export default Faq;
