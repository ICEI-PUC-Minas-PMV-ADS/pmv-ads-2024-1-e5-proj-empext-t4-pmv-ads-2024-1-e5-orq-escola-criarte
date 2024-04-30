import React, { useEffect, useState } from "react";
import { ScrollView, View, Image, ImageBackground, Text } from "react-native";
import styles from "../styles/HomeScreenStyles";
import { api } from '../config/authUtils';

interface Event {
  content: {
    title: string;
    body: string;
  };
  imageURL: string;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    api.get<Event[]>('/newsfeed')
      .then(response => setEvents(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <ImageBackground source={require('../assets/background.png')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        {events.map((event, index) => (
          <View key={index} style={styles.rectangle}>
            <Image
              source={{uri: event.imageURL}}
              style={styles.image}
            />
            <Text style={styles.title}>{event.content.title}</Text>
            <Text style={styles.body}>{event.content.body}</Text>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default Events;
