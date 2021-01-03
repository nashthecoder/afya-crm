import React from "react";
import { View, Button, StyleSheet, Text, TextInput, Image, TouchableOpacity } from "react-native";



const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>

        <Image style={styles.logo} source = {require('../assets/images/afya_logo.png')} />  
   
       
      <View>
        <Button
          title="Submit"
          onPress={() => navigation.navigate("Modules")}
        />
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
  logo: {
    marginTop: 40,
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }

});

export default Login;
