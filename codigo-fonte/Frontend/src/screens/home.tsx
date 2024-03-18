import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";

const Events = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.rectangle}>
        
      </View>
      <View style={styles.rectangle}></View>
      <View style={styles.rectangle}></View>
      <View style={styles.rectangle}></View>
      <View style={styles.rectangle}></View>
      <View style={styles.rectangle}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  rectangle: {
    width: "100%",
    height: 200,
    backgroundColor: "gray",
    marginBottom: 10,
  },
});

export default Events;
