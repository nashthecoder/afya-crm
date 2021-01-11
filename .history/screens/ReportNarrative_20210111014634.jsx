import React from "react";
import { View, Button, Text, TextInput, StyleSheet, ScrollView } from "react-native";

const ReportNarrative = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <TextInput
      style={{ 
    	height: 40, 
    	borderColor: 'gray', 
    	borderWidth: 1,
    	placeholderTextColor: 'gray',
    }}
      onChangeText={text => setTextInputValue(text)}
      value={textInputValue}
	  placeholder="Insert your text!"
    />

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
