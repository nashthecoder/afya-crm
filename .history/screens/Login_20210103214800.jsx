import React from "react";
import { View, Button, StyleSheet, Text, TextInput, Image, TouchableOpacity } from "react-native";



const Login = ({ navigation }) => {
  const state={
    email:"",
    password:""
  }
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source = {require('../assets/images/afya_logo.png')} /> 
      </View>
      <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#254176"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#254176"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Modules")}
        style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Text style={styles.signupText}>Signup</Text>
        </TouchableOpacity>
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
    marginTop: 60,
  },
  inputView:{
    width:"80%",
    backgroundColor:"#b8caff",
    borderRadius:5,
    height:50,
    marginBottom:-30,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"#254176",
    fontSize:11,
    marginTop: -25,
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#d4a418",
    borderRadius:5,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:-55,
    marginBottom:10
  },
  loginText:{
    color:"#254176",
    marginBottom:10,
    fontWeight: "800",
  },
  signupText:{
    color:"#254176",
    marginBottom: 60,
    fontWeight: "800",
  }
});

export default Login;
