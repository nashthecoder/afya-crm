import React, { useState } from 'react'
import { Container, Header, Body, Card, CardItem, Icon, Content, Title, Row,} from 'native-base';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { AppScreens, AuthStackParamList } from '../../navigation/AuthFlowNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
type ReportsScreenNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.Reports>;
interface ReportsScreenProps {
    navigation: ReportsScreenNavigationProps;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    backgroundColor: "#b8caff",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  },
  bold: {
    color: "gray",
    padding: 5,
    margin: 3,
    fontWeight: "600",
  },
  paragraph: {
    margin: 5,
  },
  bottomNav: {
    flexDirection: 'column',
  }
});

const ReportsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Container>
      <Header>
        <Text style={styles.bold}>Instructions: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt.</Text>
      </Header>
        <Content padder>
          <Card>
            <CardItem style={styles.title} header bordered>
              <Title>Report Overview</Title>
            </CardItem>
            <CardItem bordered button>
              <Body>
                <Title>Narrative Report </Title>
                <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do.
                <Button title="Complete Narrative report" onPress={() => navigation.navigate(AppScreens.Narrative)} />
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Title>Financial Report </Title>
                <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do.
                <Button title="Complete Financial report " onPress={() => navigation.navigate(AppScreens.Financial)} />
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Title>Attachments</Title> 
                <Text style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do.
                <Button title="Upload Attachments" onPress={() => navigation.navigate(AppScreens.Uploads)} />
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <View style={{
          flexDirection: 'column',
          padding: 10,
          justifyContent: 'space-between',
          marginTop: 5,
          alignItems: 'center' ,
          backgroundColor: '#FFFFFF',
            space: { height: 20 }
          }}
        >
        </View>
      </Container>
      <View style={styles.bottomNav}>
        <View style={styles.btnContainer}>
        <Button
        title="Modules"
        onPress={() => navigation.navigate("Modules")}
        />
      </View>
    </SafeAreaView>
    );
};
export default ReportsScreen;
  
  

