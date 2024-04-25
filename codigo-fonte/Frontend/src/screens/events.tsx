import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground, Pressable } from "react-native";
import styles from '../styles/EventsScreenStyles';
import globaStyles from '../styles/LoginScreenStyles';
import { api, getToken } from '../config/authUtils';
import { jwtDecode } from 'jwt-decode';
import CreateEventModal from "../components/NewEvent";

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

interface UserData {
  'http://schemas.microsoft.com/ws/2008/06/identity/claims/role': string;
}

function Events() {
    const [events, setEvents] = useState<Event[]>([]);
    const [userRole, setUserRole] = useState<string>('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        api.get<Event[]>('/newsfeed')
            .then(response => setEvents(response.data))
            .catch(error => console.error(error));

        const fetchUserRole = async () => {
            const token = await getToken();
            if (token) {
                const decoded = jwtDecode<UserData>(token);
                setUserRole(decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
            }
        };

        fetchUserRole();
    }, []);

    return (
        <ImageBackground source={require('../assets/background.png')} style={globaStyles.background}>
            {userRole === 'Admin' && (
                <Pressable
                    style={styles.createEventButton}
                    onPress={() => {
                        console.log('Botão pressionado');
                        setIsModalVisible(true);
                    }}
                >
                    <Text style={styles.createEventButtonText}>Criar Evento</Text>
                </Pressable>
            )}
            <CreateEventModal visible={isModalVisible} onClose={() => setIsModalVisible(false)} />
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
                            source={{ uri: event.imageURL }}
                            style={styles.eventImage}
                        />
                    </View>
                </View>
            ))}
        </ImageBackground>
    );
}

export default Events;
