import React from "react";
import { View, Button, Text, StyleSheet, ScrollView } from "react-native";
import { Body, CardItem, Title } from 'native-base';


const ReportNarrative = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <CardItem bordered>
            <Body>
              <Title>Attachments</Title> 
                <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do.
                </Text>
            </Body>
          </CardItem>
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
