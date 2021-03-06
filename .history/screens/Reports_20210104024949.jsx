import React, { Component } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { Container, Header, Body, Card, CardItem, Content, Title } from 'native-base';
import  ReportNarrative from "../component/ReportNarrative";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bold: {
    color: "gray",
    padding: 5,
    margin: 5,
    fontWeight: "600",
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    backgroundColor: "#b8caff",
  },
  paragraph: {
    margin: 5,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  },
});

const Reports = ({}) => {
  return (
    <View style={styles.container}>
      <Container>
        <Header>
          <Text style={styles.bold}>Instructions: Lorem ipsum dolor sit amet, adipiscing elit, 
            sed do eiusmod tempor incididunt.</Text>
        </Header>
          <Content padder>
            <Card>
            <CardItem style={styles.title} header bordered>
              <Title>Report Overview</Title>
            </CardItem>
              <CardItem bordered button>
                <Body>
          
                      <ReportNarrative />
                   
                </Body>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Title>Financial Report </Title>
                    <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do.</Text>
                    
                </Body>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Title>Attachments</Title> 
                  <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do.</Text>
                    
                </Body>
              </CardItem>
            </Card>
          </Content>
      </Container>
    </View>
  );
};

export default Reports;
