import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground, Pressable, Platform, ScrollView, RefreshControl, Alert, ActivityIndicator } from "react-native";
import styles from '../styles/EventsScreenStyles';
import { api, getToken } from '../config/authUtils';
import { jwtDecode } from 'jwt-decode';
import { Ionicons } from '@expo/vector-icons';
import CreateEventModal from "../components/NewEvent";
import Title from "../components/Title";
import { decode } from "base-64";

global.atob = decode;

interface Event {
    id: string;
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
    const [eventsByMonth, setEventsByMonth] = useState<{ [key: string]: Event[] }>({});
    const [userRole, setUserRole] = useState<string>('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [expandedCard, setExpandedCard] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);


    const deleteEvent = async (id: string) => {
        try {
            await api.delete(`/posts/${id}`);
            fetchEvents();
        } catch (error) {
            console.error(error);
        }
    };

    const confirmDelete = (id: string) => {
        if (Platform.OS === 'web') {
            const userResponse = window.confirm("Tem certeza de que deseja deletar este evento?");
            if (userResponse) {
                deleteEvent(id);
            }
        } else {
            Alert.alert(
                "Deletar Evento",
                "Tem certeza de que deseja deletar este evento?",
                [
                    {
                        text: "Cancelar",
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => deleteEvent(id) }
                ],
                { cancelable: false }
            );
        }
    };

    const fetchEvents = async () => {
        setIsLoading(true);
        try {
            const response = await api.get<Event[]>('/newsfeed');
            const fetchedEvents = response.data;

            const organizedEvents = fetchedEvents.reduce((acc: { [key: string]: Event[] }, event: Event) => {
                const month = new Date(event.date).toLocaleString('default', { month: 'long' }).toUpperCase();
                if (!acc[month]) {
                    acc[month] = [];
                }
                acc[month].push(event);
                return acc;
            }, {});

            setEvents(fetchedEvents);
            setEventsByMonth(organizedEvents);
            console.log(organizedEvents);
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
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

    const monthOrder = ['JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO', 'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'];

    return (
        <ImageBackground resizeMode="cover" source={require('../assets/background.png')} style={styles.background}>
            <View style={{ flex: 1 }}>
                {isLoading ? (

                    <View style={{ height: "100%", justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.15)' }}>
                        <ActivityIndicator size="large" color="#413267" style={{ zIndex: 1 }} />
                    </View>
                ) : (
                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1, marginBottom: 50 }}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                        }
                    >
                        {monthOrder.map((month, index) => {
                            const events = eventsByMonth[month];
                            if (!events) {
                                return null;
                            }
                            return (
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
                                                {userRole === 'Admin' && (
                                                    <Pressable
                                                        style={styles.deleteButton}
                                                        onPress={() => {
                                                            console.log('Botão "Deletar" pressionado');
                                                            confirmDelete(event.id);
                                                        }}
                                                    >
                                                        <Ionicons name="trash-outline" size={24} color="red" />
                                                    </Pressable>
                                                )}
                                            </View>
                                            <Pressable onPress={() => setExpandedCard(expandedCard === index ? null : index)}>
                                                <Text style={styles.moreInfo}>Mais informações</Text>
                                            </Pressable>
                                            {expandedCard === index && (
                                                <View style={styles.extraInfo}>
                                                    <Text style={styles.extraInfoText}>{event.content.body}</Text>
                                                </View>
                                            )}
                                        </View>
                                    ))}
                                </View>
                            );
                        })}
                    </ScrollView>
                )}
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
                <View style={styles.centeredView}>
                    <CreateEventModal visible={isModalVisible} onClose={closeModal} />
                </View>

            </View>
        </ImageBackground>
    );
}

export default Events;
