import React from "react";
import { View, Button, StyleSheet, Text, TextInput, Image, ScrollView } from "react-native";



const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <ScrollView style={styles.scrollView}>
        <Text style={styles.txtHello}>
Last updated: January 04, 2021

Please read these terms and conditions carefully before using Our Service.

Interpretation and Definitions  
Interpretation  
The words of which the initial letter is capitalized have meanings defined
under the following conditions. The following definitions shall have the same
meaning regardless of whether they appear in singular or in plural.

Definitions  
For the purposes of these Terms and Conditions:


Acknowledgment  
These are the Terms and Conditions governing the use of this Service and the
agreement that operates between You and the Company. These Terms and
Conditions set out the rights and obligations of all users regarding the use
of the Service.

Your access to and use of the Service is conditioned on Your acceptance of and
compliance with these Terms and Conditions. These Terms and Conditions apply
to all visitors, users and others who access or use the Service.

By accessing or using the Service You agree to be bound by these Terms and
Conditions. If You disagree with any part of these Terms and Conditions then
You may not access the Service.

You represent that you are over the age of 18. The Company does not permit
those under 18 to use the Service.

Your access to and use of the Service is also conditioned on Your acceptance
of and compliance with the Privacy Policy of the Company. Our Privacy Policy
describes Our policies and procedures on the collection, use and disclosure of
Your personal information when You use the Application or the Website and
tells You about Your privacy rights and how the law protects You. Please read
Our Privacy Policy carefully before using Our Service.
        </Text> 
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
    borderRadius: 5
},
  txtHello: {
    fontWeight: "800",
    marginTop: 100,
  }

});

export default About;
