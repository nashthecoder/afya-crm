import React, { Component } from 'react';
import { StyleSheet, Text,View ,TouchableOpacity} from 'react-native';

const Drawer = (props) => (
  <View style={styles.container}>
    <View>
      <Text style={[styles.text,{fontSize:30,textDecorationLine:'underline'}]}>MENU</Text>
      <Text onPress={()=>{
          //This is workaround to prevent loading first screen ever and over
          const { state } = props.navigation;
          if (state.routes[0].routes[state.routes[0].routes.length-1].routeName=='First'){
          return null
        }
        //End of workaround
          props.navigation.navigate('First')}} style={styles.text}>Go to First</Text>
      <Text onPress={()=>props.navigation.navigate('Second')} style={styles.text}>Go to Second</Text>
      <Text onPress={()=>props.navigation.navigate('Third')} style={styles.text}>Go to Third</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#b8caff',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:50,
  },
  text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#254176'
  }
})

export default Drawer;