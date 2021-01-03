import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
      <Text style={styles.text}>User Profile page</Text>
      </View>
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

export default Profile;


Fill in user details
Insert Organisation Name
Insert Project Name
Insert Project Code
Insert Region
Insert City
Insert Grant Amount
Insert Grant Period