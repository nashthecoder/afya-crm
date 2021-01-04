import React from "react";
import { View, StyleSheet, Button } from "react-native";
import email from 'react-native-email';

const MessageNew = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Button title="Send Mail" onPress={this.handleEmail} />
      </View>
    </View>
  );
  handleEmail = () => {
    const to = ['tiaan@email.com', 'foo@bar.com'] // string or array of email addresses
    email(to, {
        // Optional additional arguments
        cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
        bcc: 'mee@mee.com', // string or array of email addresses
        subject: 'Show how to use',
        body: 'Some body right here'
    }).catch(console.error)
}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default MessagesNew;
