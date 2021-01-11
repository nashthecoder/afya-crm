import React, { useState } from "react";
import { View, Button, Text, StyleSheet, ScrollView } from "react-native";
import NativeForms from "native-forms";

const Form = () => {
  const [hasForm, showForm] = useState(false);
  const show = () => showForm(true);
  const hide = () => showForm(false); 

const ReportNarrative = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Button title="Show Form" onPress={show} color="#20f" />

{hasForm && (
  <NativeForms
    form="https://my.nativeforms.com/vVDct0mcvZWPmZic4JlRvpmNy0Db"
    onClose={hide}
  />
)}
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
