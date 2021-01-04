import React from "react";
import { View, Button, Text, StyleSheet, ScrollView } from "react-native";

const ReportAttachments = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text>Upload attachments</Text>

          <Button
            title="Review Reports"
            onPress={() => navigation.navigate("Reports")}
          />
          <Button
            title="Submit"
            onPress={() => alert("Your Report has been submitted")}
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

export default ReportAttachments;