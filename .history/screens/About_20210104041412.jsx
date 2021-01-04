import React from "react";
import { View, StyleSheet, Text,  ScrollView } from "react-native";



const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <ScrollView style={styles.scrollView}>
        <Text style={styles.textFaq}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. In fermentum posuere urna nec tincidunt 
        praesent. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Ullamcorper 
        sit amet risus nullam eget felis eget. Convallis posuere morbi leo urna molestie at elementum 
        eu. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Leo a diam sollicitudin 
        tempor. Justo laoreet sit amet cursus sit amet. Enim blandit volutpat maecenas volutpat. 
        Est lorem ipsum dolor sit amet. Non curabitur gravida arcu ac tortor dignissim convallis aenean. 
        Facilisi cras fermentum odio eu feugiat. Feugiat nibh sed pulvinar proin gravida. 
        Lorem ipsum dolor sit amet consectetur adipiscing. Metus vulputate eu scelerisque 
        felis imperdiet. A erat nam at lectus. Scelerisque eu ultrices vitae auctor eu augue ut 
        lectus. Mollis aliquam ut porttitor leo a diam sollicitudin. Vel fringilla est ullamcorper 
        eget nulla facilisi etiam. Et netus et malesuada fames ac. Risus viverra adipiscing at in tellus. 
        Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Pulvinar sapien et 
        ligula ullamcorper malesuada proin libero nunc consequat. Scelerisque in dictum non 
        consectetur a erat nam at. Faucibus a pellentesque sit amet porttitor eget dolor morbi non.
        </Text> 
        <Text style={styles.textFaq}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. In fermentum posuere urna nec tincidunt 
        praesent. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Ullamcorper 
        sit amet risus nullam eget felis eget. Convallis posuere morbi leo urna molestie at elementum 
        eu. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Leo a diam sollicitudin 
        tempor. Justo laoreet sit amet cursus sit amet. Enim blandit volutpat maecenas volutpat. 
        Est lorem ipsum dolor sit amet. Non curabitur gravida arcu ac tortor dignissim convallis aenean. 
        Facilisi cras fermentum odio eu feugiat. Feugiat nibh sed pulvinar proin gravida. 
        Lorem ipsum dolor sit amet consectetur adipiscing. Metus vulputate eu scelerisque 
        felis imperdiet. A erat nam at lectus. Scelerisque eu ultrices vitae auctor eu augue ut 
        lectus. Mollis aliquam ut porttitor leo a diam sollicitudin. Vel fringilla est ullamcorper 
        eget nulla facilisi etiam. Et netus et malesuada fames ac. Risus viverra adipiscing at in tellus. 
        Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Pulvinar sapien et 
        ligula ullamcorper malesuada proin libero nunc consequat. Scelerisque in dictum non 
        consectetur a erat nam at. Faucibus a pellentesque sit amet porttitor eget dolor morbi non.
        </Text> 
        <Text style={styles.textFaq}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. In fermentum posuere urna nec tincidunt 
        praesent. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Ullamcorper 
        sit amet risus nullam eget felis eget. Convallis posuere morbi leo urna molestie at elementum 
        eu. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Leo a diam sollicitudin 
        tempor. Justo laoreet sit amet cursus sit amet. Enim blandit volutpat maecenas volutpat. 
        Est lorem ipsum dolor sit amet. Non curabitur gravida arcu ac tortor dignissim convallis aenean. 
        Facilisi cras fermentum odio eu feugiat. Feugiat nibh sed pulvinar proin gravida. 
        Lorem ipsum dolor sit amet consectetur adipiscing. Metus vulputate eu scelerisque 
        felis imperdiet. A erat nam at lectus. Scelerisque eu ultrices vitae auctor eu augue ut 
        lectus. Mollis aliquam ut porttitor leo a diam sollicitudin. Vel fringilla est ullamcorper 
        eget nulla facilisi etiam. Et netus et malesuada fames ac. Risus viverra adipiscing at in tellus. 
        Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Pulvinar sapien et 
        ligula ullamcorper malesuada proin libero nunc consequat. Scelerisque in dictum non 
        consectetur a erat nam at. Faucibus a pellentesque sit amet porttitor eget dolor morbi non.
        </Text> 
      </ScrollView>
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
    borderRadius: 5
},
  textFaq: {
    fontWeight: "400",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  }

});

export default About;
