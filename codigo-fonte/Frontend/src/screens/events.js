import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import globaStyles from '../styles/LoginScreenStyles';

function Events() {
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={globaStyles.background}>
    <View style={styles.rectangle}>
      <View style={styles.row}>
        <Text style={styles.label}>DIA</Text>
        <Text style={styles.label}>LOCAL</Text>
        <Text style={styles.label}>HORA</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.content}>26/02</Text>
        <Text style={styles.content}>AV.BRASIL</Text>
        <Text style={styles.content}>14H</Text>
      </View>
      <View style={styles.eventDetails}>
        <Text style={styles.eventTitle}>APRESENTAÇÃO CORAL</Text>
        <Image
          image={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
          style={styles.eventImage}
        />
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
    flex: 1,
  },
  content: {
    flex: 1,
  },
  eventDetails: {
    marginTop: 10,
  },
  eventTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  eventImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 5,
  },
});

export default Events;
