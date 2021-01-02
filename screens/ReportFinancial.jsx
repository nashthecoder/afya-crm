import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const ReportFinancial = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>FinancialReport screen</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("Welcome")}
      />
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("About")}
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
  },
});

export default ReportFinancial;
