import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground, Pressable, ScrollView, RefreshControl } from "react-native";
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
    const [refreshing, setRefreshing] = useState(false);

    const fetchEvents = async () => {
        try {
            const response = await api.get<Event[]>('/newsfeed');
            setEvents(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchUserRole = async () => {
        const token = await getToken();
        if (token) {
            const decoded = jwtDecode<UserData>(token);
            setUserRole(decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
        }
    };

    useEffect(() => {
        fetchEvents();
        fetchUserRole();
    }, []);

    const closeModal = () => {
        setIsModalVisible(false);
        fetchEvents();
    };

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        fetchEvents().then(() => setRefreshing(false));
    }, []);

    return (
        <View style={{flex: 1}}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
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
            </ScrollView>
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
            <CreateEventModal visible={isModalVisible} onClose={closeModal} />
        </View>
    );
    
}

export default Events;
