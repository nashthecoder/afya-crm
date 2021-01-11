import React from "react";
import { View, Button, Text, Input, StyleSheet, ScrollView } from "react-native";

const ReportNarrative = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Input>
          
        </Input>
          <Button
            title="Next"
            onPress={() => navigation.navigate("ReportFinancial")}
          />
        </ScrollView>
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
});

export default ReportNarrative;
