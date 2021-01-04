import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Header, Title, Body } from "native-base";

const Profile = () => {
  return (
    <View style={styles.container}>
    <Container>
      <Header>
          <Body>
            <Title>User Profile</Title>
          </Body>
      </Header>
    </Container>
      
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
  text: {
    fontWeight: "800",
  }

});

export default Profile;
