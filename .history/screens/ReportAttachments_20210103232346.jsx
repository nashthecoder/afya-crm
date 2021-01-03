import React from "react";
import { View, Button, Text, StyleSheet, ScrollView, Paragraph } from "react-native";

const ReportAttachments = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text>Upload attachments</Text>
            <Paragraph>
            Thank you for your report submission
You will get an email with a copy of the completed report
            </Paragraph>

          {/* <Button
            title="Upload Attachments"
            onPress={() => navigation.navigate("ReportAttachments")}
          /> */}
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