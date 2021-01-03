import React from "react";
import { View, Button, Text, StyleSheet, ScrollView } from "react-native";

const ReportFinancial = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          
          <Button
            title="Upload Attachments"
            onPress={() => navigation.navigate("ReportAttachments")}
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

export default ReportFinancial;