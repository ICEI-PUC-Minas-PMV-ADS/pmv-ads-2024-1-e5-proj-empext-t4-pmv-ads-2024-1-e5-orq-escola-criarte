import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground, Pressable, ScrollView, RefreshControl } from "react-native";
import styles from '../styles/EventsScreenStyles';
import { api, getToken } from '../config/authUtils';
import { jwtDecode } from 'jwt-decode';
import CreateEventModal from "../components/NewEvent";
import Title from "../components/Title";

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
    'role': string;
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
            setUserRole(decoded['role']);
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
        console.log('A página está sendo recarregada');
        setRefreshing(true);
        fetchEvents().then(() => setRefreshing(false));
    }, []);

    const eventsByMonth = events.reduce((acc: {[key: string]: Event[]}, event: Event) => {
        const month = new Date(event.date).toLocaleString('default', { month: 'long' }).toUpperCase();
        if (!acc[month]) {
            acc[month] = [];
        }
        acc[month].push(event);
        return acc;
    }, {});

    return (
        <ImageBackground resizeMode="cover" source={require('../assets/background.png')} style={styles.background}>
            <View style={{ flex: 1 }}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, marginBottom: 50 }}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                >
                    {Object.entries(eventsByMonth).map(([month, events], index) => (
                        <View key={index}>
                            <Text style={styles.monthTitle}>{month}</Text>
                            {events.map((event, index) => (
                                <View key={index} style={styles.rectangle}>
                                    <View style={styles.eventDetails}>
                                        <Text style={styles.eventTitle}>{event.content.title}</Text>
                                        <Image
                                            resizeMode="cover"
                                            source={{ uri: event.imageURL }}
                                            style={styles.eventImage}
                                        />
                                    </View>
                                    <View style={styles.row}>
                                        <View style={styles.informaçoes}>
                                            <Title title="Data" />
                                            <Text style={styles.label}>{new Date(event.date).toLocaleDateString()}</Text>
                                        </View>
                                        <View style={styles.informaçoes}>
                                            <Title title="Endereço" />
                                            <Text style={styles.label}>{event.address.street}, {event.address.number} - {event.address.county}</Text>
                                        </View>
                                        <View style={styles.informaçoes}>
                                            <Title title="Horário" />
                                            <Text style={styles.label}>{new Date(event.date).toLocaleTimeString()}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
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
        </ImageBackground>
    );
}


export default Events;
