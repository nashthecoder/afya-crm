import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { Container, Header } from 'native-base';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList, AppScreens } from '../../navigation/AuthFlowNavigator';
// import { AntDesign } from '@expo/vector-icons'; 
type ModulesScreenNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.Modules>;
interface ModulesScreenProps {
    navigation: ModulesScreenNavigationProps;
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      paddingTop: 10,
    },
    buttons: {
      flexDirection: 'column',
      paddingHorizontal: 15,
      marginTop: 10,
      height: 500,
    },
    item: {
      flex: 1,
      height: 120,
      paddingVertical: 20,
      borderColor: "#254176",
      borderWidth: 1,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: 5,
      backgroundColor: "#b8caff",
      margin: 5,
    },
    blogItem: {
      width: '31%',
      height: 120,
      paddingVertical: 20,
      borderColor: "#d6dbdf",
      borderWidth: 1,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'space-around',
      marginHorizontal: 5,
    },
    itemText: {
      color: "#254176",
    },
    itemImage: {
      height: 35,
    },
    bold: {
      paddingTop: 15,
      marginLeft: 10,
      marginRight: 10,
    }
  });
  
const reportsIcon = require('../../assets/images/reports.png');
const messagesIcon = require('../../assets/images/messages.png');
const calendarIcon = require('../../assets/images/calendar.png');
const faqIcon = require('../../assets/images/faq.png');
const loginIcon = require('../../assets/images/login.png');
const profileIcon = require('../../assets/images/profile.png');

const ModulesScreen: React.FunctionComponent<ModulesScreenProps> = (props) => {
    const { navigation } = props;
return (
        <SafeAreaView style={styles.container}>
          <Container>
            <Header>
              <Text style={styles.bold}>Afya Inc</Text><br />
              <Text style={styles.bold}>CRM Modules</Text>
            </Header>
            <View style={styles.buttons}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Reports')}
                style={styles.item}
              >
                <Image
                  resizeMode="contain"
                  source={reportsIcon}
                  style={styles.itemImage}
                />
                <Text style={styles.itemText}>Reports</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Messages')}
                style={styles.item}
              >
                <Image
                  resizeMode="contain"
                  source={messagesIcon}
                  style={styles.itemImage}
                />
                <Text style={styles.itemText}>Messages</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Calendar')}
                style={styles.item}
              >
                <Image
                  resizeMode="contain"
                  source={calendarIcon}
                  style={styles.itemImage}
                />
                <Text style={styles.itemText}>Calendar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Faq')}
                style={styles.item}
              >
                <Image
                  resizeMode="contain"
                  source={faqIcon}
                  style={styles.itemImage}
                />
                <Text style={styles.itemText}>FAQ</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Profile')}
                style={styles.item}
              >
                <Image
                  resizeMode="contain"
                  source={profileIcon}
                  style={styles.itemImage}
                />
                <Text style={styles.itemText}>Profile</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity
                onPress={() => props.navigation.navigate('Add Module')}
                style={styles.item}
              >
                <Image
                  resizeMode="contain"
                  source={AntDesign}
                  style={styles.itemImage}
                />
                <Text style={styles.itemText}>Add Module</Text>
              </TouchableOpacity> */}
            </View>
          </Container>
          <View style={styles.btnNextContainer}>
                <Button title="Logout" onPress={() => navigation.navigate(AppScreens.Welcome)} />
          </View>
        </SafeAreaView>
    );
};
export default ModulesScreen;
