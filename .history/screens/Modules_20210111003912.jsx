import React from "react";
import { View, Button, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Left, Title, Body, Icon, Right }from "native-base";

const styles = StyleSheet.create({
  button: {
    paddingTop: 20,
    marginTop: 10,
    marginBottom: 30,
    marginLeft: 17,
    marginRight: -2,
    width: "100%",
    height: "75%",
    alignItems: 'center',
    backgroundColor: '#b8caff',
    borderRadius: 5,
    borderWidth: .5,
    borderColor: '#f1f1e6'
  },
  buttonText: {
    textAlign: 'center',
    padding: 45,
    color: '#254176',
    fontWeight: '800',
  },
  icon: {
    marginTop: 15,
    marginBottom: -20,
  }

});

const Modules = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>CRM Modules</Title>
        </Body>
        <Right />
      </Header>
      <Grid>
        <View styles={styles.buttons}>
        <Row>
            <TouchableOpacity onPress={() => navigation.navigate("Reports")}>
              <View style={styles.button}>
              <Icon name="folder" style={styles.icon}  size={30}/>
                <Text style={styles.buttonText}>Reports</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Messages")}>
              <View style={styles.button}>
              <Icon name="email" style={styles.icon} size={30}/>
                <Text style={styles.buttonText}>Messages</Text>
              </View>
            </TouchableOpacity>
        </Row>
        <Row>
            <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
              <View style={styles.button}>
              <Icon name="calendar" style={styles.icon}  size={30}/>
                <Text style={styles.buttonText}>Calendar</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("Send request to Tech Support")}>
              <View style={styles.button}>
              <Icon name="plus" style={styles.icon}  size={30}/>
                <Text style={styles.buttonText}>Module +</Text>
              </View>
            </TouchableOpacity>
        </Row>  
        <Row>
            <TouchableOpacity onPress={() => alert("Send request to Tech Support")}>
              <View style={styles.button}>
              <Icon name="folder" style={styles.icon} size={30}/>
                <Text style={styles.buttonText}>Module +</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert("Send request to Tech Support")}>
              <View style={styles.button}>
              <Icon name="folder" style={styles.icon} size={30}/>
                <Text style={styles.buttonText}>Module +</Text>
              </View>
            </TouchableOpacity>
        </Row>   
        </View> 
      </Grid>
    </Container>
  );
};
export default Modules;




