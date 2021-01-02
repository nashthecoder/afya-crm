import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Title, Body, Icon, Right} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      paddingTop: 10,
    },
    buttons: {
      flexDirection: 'column',
      marginBottom: 30,
      paddingHorizontal: 40,
      marginTop: 30,
      height: "75%",
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
      marginHorizontal: 15,
      backgroundColor: "#b8caff",
      margin: 15,
    },
    itemText: {
      color: "#254176",
      margin: -5,
      fontWeight: "600",
    },
    itemImage: {
      height: 35,
      margin: 10,
    },
    bold: {
      paddingTop: 15,
      marginLeft: 10,
      marginRight: 10,
    },
    btnContainer: {
      backgroundColor: '#f1f1e6',
      borderRadius: 5,
      padding: 5,
      marginTop: 20,
      width: "40%",
      alignSelf: "center",
    },
    menuButton: {
      marginLeft: 18,
      marginTop: 5,
    }
  });
  
const reportsIcon = require('../../assets/images/reports.png');
const messagesIcon = require('../../assets/images/messages.png');
const calendarIcon = require('../../assets/images/calendar.png');
const faqIcon = require('../../assets/images/faq.png');
const loginIcon = require('../../assets/images/login.png');
const profileIcon = require('../../assets/images/profile.png');


const ModulesScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("Reports")}
      />
      <Button
        title="Go to Login Screen"
        onPress={() => navigation.navigate("Messages")}
      />
    </View>
  );
};


export default ModulesScreen;

// const ModulesScreen = ({ navigation }) => {
//       return (
//       <Container>
//         <Header>
//           <Left>
//             <View style={styles.menuButton}>
//               <Icon name='menu'/>
//             </View>
//           </Left>
//           <Body>
//             <Title>CRM Modules</Title>
//           </Body>
//           <Right />
//         </Header>
//           <View style={styles.buttons}> 
//             <Grid>
//               <Row>
//                 <Col>
//                   <TouchableOpacity
//                   onPress={() => navigation.navigate("Reports")}
//                   style={styles.item}
//                   >
//                     <Image
//                       resizeMode="contain"
//                       source={reportsIcon}
//                       style={styles.itemImage}
//                     />
//                   <Text style={styles.itemText}>Reports</Text>
//                   </TouchableOpacity>
//                 </Col>
//                 <Col>
//                   <TouchableOpacity
//                   onPress={() => props.navigation.navigate('Messages')}
//                   style={styles.item}
//                   >
//                     <Image
//                       resizeMode="contain"
//                       source={messagesIcon}
//                       style={styles.itemImage}
//                     />
//                   <Text style={styles.itemText}>Messages</Text>
//                   </TouchableOpacity>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   <TouchableOpacity
//                   onPress={() => props.navigation.navigate('Calendar')}
//                   style={styles.item}
//                   >
//                     <Image
//                       resizeMode="contain"
//                       source={calendarIcon}
//                       style={styles.itemImage}
//                     />
//                   <Text style={styles.itemText}>Calendar</Text>
//                   </TouchableOpacity>
//                 </Col>
//                 <Col>
//                   <TouchableOpacity
//                   onPress={() => props.navigation.navigate('Faq')}
//                   style={styles.item}
//                   >
//                     <Image
//                       resizeMode="contain"
//                       source={faqIcon}
//                       style={styles.itemImage}
//                     />
//                   <Text style={styles.itemText}>FAQ</Text>
//                   </TouchableOpacity>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   <TouchableOpacity
//                   onPress={() => props.navigation.navigate('Profile')}
//                   style={styles.item}
//                   >
//                     <Image
//                       resizeMode="contain"
//                       source={profileIcon}
//                       style={styles.itemImage}
//                     />
//                   <Text style={styles.itemText}>Profile</Text>
//                   </TouchableOpacity>
//                 </Col>
//                 <Col>
//                   <TouchableOpacity
//                   onPress={() => props.navigation.navigate('NotFound')}
//                   style={styles.item}
//                   >
//                     <Image
//                       resizeMode="contain"
//                       source={loginIcon}
//                       style={styles.itemImage}
//                     />
//                   <Text style={styles.itemText}>Add Module</Text>
//                   </TouchableOpacity>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   <TouchableOpacity
//                   onPress={() => props.navigation.navigate('Add Module')}
//                   style={styles.item}
//                   >
//                     <Image
//                       resizeMode="contain"
//                       source={loginIcon}
//                       style={styles.itemImage}
//                     />
//                   <Text style={styles.itemText}>Add Module</Text>
//                   </TouchableOpacity>
//                 </Col>
//                 <Col>
//                   <TouchableOpacity
//                   onPress={() => props.navigation.navigate('Add Module')}
//                   style={styles.item}
//                   >
//                     <Image
//                       resizeMode="contain"
//                       source={loginIcon}
//                       style={styles.itemImage}
//                     />
//                   <Text style={styles.itemText}>Add Module</Text>
//                   </TouchableOpacity>
//                 </Col>
//               </Row>
//             </Grid>
//             <View style={styles.btnContainer}>
//                 <Button title="Logout" onPress={() => navigation.navigate(AppScreens.Welcome)} />
//             </View>
//           </View>
//       </Container>
//   );
// };
// export default ModulesScreen;
