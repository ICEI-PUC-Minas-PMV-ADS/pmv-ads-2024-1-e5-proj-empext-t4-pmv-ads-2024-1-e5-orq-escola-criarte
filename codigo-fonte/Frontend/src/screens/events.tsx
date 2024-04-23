import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground, ImageSourcePropType } from "react-native";
import styles from '../styles/EventsScreenStyles';
import globaStyles from '../styles/LoginScreenStyles';
import { api } from '../config/authUtils';

interface Event {
    content: {
        title: string;
        body: string;
    };
    imageURL: string;
    date: string;
    address: {
        street: string;
        number: string;
        county: string;
    };
    username: string;
}

function Events() {
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        api.get<Event[]>('/newsfeed')
            .then(response => setEvents(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <ImageBackground source={require('../assets/background.png')} style={globaStyles.background}>
            {events.map((event, index) => (
                <View key={index} style={styles.rectangle}>
                    <View style={styles.row}>
                        <Text style={styles.label}>{new Date(event.date).toLocaleDateString()}</Text>
                        <Text style={styles.label}>{event.address.street}</Text>
                        <Text style={styles.label}>{new Date(event.date).toLocaleTimeString()}</Text>
                    </View>
                    <View style={styles.eventDetails}>
                        <Text style={styles.eventTitle}>{event.content.title}</Text>
                        <Image
                            source={{ uri: event.imageURL } as ImageSourcePropType}
                            style={styles.eventImage}
                        />
                    </View>
                </View>
            ))}
        </ImageBackground>
    );
}

export default Events;