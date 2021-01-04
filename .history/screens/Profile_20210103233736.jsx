import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Header } from "native-base";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Header>
        <Text style={styles.text}>User Profile page</Text>
      </Header>
      <View style={styles.center}>
      
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
