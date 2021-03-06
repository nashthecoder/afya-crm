import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { Container, Header, Body, Card, CardItem, Content, Title } from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    backgroundColor: "white",
    borderRadius: 5,
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

const Faq = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Container>
        <Header>
          <Text style={styles.bold}>Afya Inc CRM: Lorem ipsum dolor sit amet, adipiscing elit, 
            sed do eiusmod tempor incididunt.</Text>
        </Header>
          <Content padder>
            <Card>
            <CardItem style={styles.title} header bordered>
              <Title>CRM FAQ</Title>
            </CardItem>
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

export default Faq;
