import React from "react";
import { View, Button, Text, StyleSheet, ScrollView } from "react-native";
import { Container, Header, Body, Card, CardItem, Content, Title } from 'native-base';


const ReportNarrative = ({ navigation }) => {
    return (
      <View style={styles.container}>
      <Container>
        <Header>
          <Text style={styles.bold}>Afya Inc CRM: Lorem ipsum dolor sit amet, adipiscing elit, 
            sed do eiusmod tempor incididunt.</Text>
        </Header>
          <Content padder>
            <Card>

              <CardItem bordered button>
                <Body>
                    <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do.</Text>
                </Body>
              </CardItem>
              <CardItem bordered>
                <Body>
                    <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do.</Text>
                </Body>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do.</Text>
                </Body>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do.</Text>
                </Body>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do.</Text>
                </Body>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do.</Text>
                </Body>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do.</Text>
                </Body>
              </CardItem>
              <CardItem bordered>
                <Body>
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
