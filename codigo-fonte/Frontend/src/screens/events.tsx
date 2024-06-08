import React, { useEffect, useState } from "react";
import { View, Text, Image, ImageBackground, Pressable, Platform, ScrollView, RefreshControl, Alert, ActivityIndicator } from "react-native";
import styles from '../styles/EventsScreenStyles';
import { api, getToken } from '../config/authUtils';
import { jwtDecode } from 'jwt-decode';
import { Ionicons } from '@expo/vector-icons';
import CreateEventModal from "../components/NewEvent";
import Title from "../components/Title";
import { decode } from "base-64";
import axios from 'axios';

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
    'email': string;
    'user_name': string;
}

function Events() {
    const [events, setEvents] = useState<Event[]>([]);
    const [eventsByMonth, setEventsByMonth] = useState<{ [key: string]: Event[] }>({});
    const [userRole, setUserRole] = useState<string>('');
    const [userEmail, setUserEmail] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [expandedCard, setExpandedCard] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedEventType, setSelectedEventType] = useState<{ [eventId: string]: number | null }>({});
    const [confirmedEvents, setConfirmedEvents] = useState<string[]>([]);

    const deleteEvent = async (id: string) => {
        try {
            await api.delete(`/posts/${id}`);
            fetchEvents();
        } catch (error) {
            console.error(error);
        }
    };

    const showConfirmationAlert = (eventId: string, eventType: number) => {
        Alert.alert(
            "Confirmar Presença",
            `Você deseja confirmar presença como ${eventType === 0 ? 'Músico' : 'Espectador'}?`,
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Confirmação cancelada"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => handleJoinEvent(eventId, eventType),
                }
            ],
            { cancelable: false }
        );
    };

    const handleEventTypeChange = (eventId: string, eventType: number) => {
        if (selectedEventType[eventId] !== undefined) return;

        showConfirmationAlert(eventId, eventType);
    };

    const handleJoinEvent = async (eventId: string, eventType: number) => {
        console.log('Iniciando handleJoinEvent para eventId:', eventId, 'e eventType:', eventType);

        try {
            const postResponse = await api.get(`/posts/${eventId}`);
            const eventIdFromResponse = postResponse.data.eventId;

            if (!eventIdFromResponse) {
                console.error('eventId não encontrado na resposta da API do post.');
                return;
            }

            const payload = {
                userName: userName,
                email: userEmail,
                personType: eventType,
                eventId: eventIdFromResponse
            };

            console.log('Dados enviados para a API eventpersons:', payload);

            await api.post('/eventpersons', payload);
            console.log('Solicitação POST bem-sucedida');

            setConfirmedEvents(prevState => [...prevState, eventId]);
            setSelectedEventType(prevState => ({ ...prevState, [eventId]: eventType }));
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response && error.response.status === 400 && error.response.data === "Usuário já cadastrado para este evento") {
                    Alert.alert("Erro", "Você já se cadastrou para este evento");
                } else if (error.response) {
                    console.error('Erro ao fazer a solicitação POST:', error.response.data);
                } else {
                    console.error('Erro ao fazer a solicitação POST:', error.message);
                }
            } else if (error instanceof Error) {
                console.error('Erro ao fazer a solicitação POST:', error.message);
            } else {
                console.error('Erro desconhecido ao fazer a solicitação POST:', error);
            }
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
            setUserEmail(decoded['email']);
            setUserName(decoded['user_name']);
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
                                                <Image
                                                    resizeMode="contain"
                                                    source={{ uri: event.imageURL }}
                                                    style={styles.eventImage}
                                                />
                                                <Text style={styles.eventTitle}>{event.content.title}</Text>
                                            </View>
                                            <View style={styles.row1}>
                                                <View style={styles.informaçoes1}>
                                                    <Title title="Data         | " />
                                                    <Text style={styles.label}>{new Date(event.date).toLocaleDateString()}</Text>
                                                </View>
                                                <View style={styles.informaçoes1}>
                                                    <Title title="Horário    | " />
                                                    <Text style={styles.label}>{new Date(event.date).toLocaleTimeString()}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.row2}>
                                                <View style={styles.informaçoes2}>
                                                    <Title title="Endereço | " />
                                                    <Text style={styles.label}>{event.address.street}, {event.address.number} - {event.address.county}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.row3}>
                                                <Text style={styles.text1}>Vou ao evento como:</Text>
                                            </View>
                                            <View style={styles.row4}>
                                                <Pressable
                                                    style={[styles.joinButton, { backgroundColor: selectedEventType[event.id] === 0 ? '#413267' : '#6750A4' }]}
                                                    onPress={() => handleEventTypeChange(event.id, 0)}
                                                    disabled={confirmedEvents.includes(event.id)}
                                                >
                                                    <Text style={styles.joinButtonText}>Músico</Text>
                                                </Pressable>
                                                <Pressable
                                                    style={[styles.joinButton, { backgroundColor: selectedEventType[event.id] === 1 ? '#413267' : '#6750A4' }]}
                                                    onPress={() => handleEventTypeChange(event.id, 1)}
                                                    disabled={confirmedEvents.includes(event.id)}
                                                >
                                                    <Text style={styles.joinButtonText}>Espectador</Text>
                                                </Pressable>
                                            </View>
                                            <Pressable onPress={() => setExpandedCard(expandedCard === event.id ? null : event.id)}>
                                                <Text style={styles.moreInfo}>Mais informações</Text>
                                            </Pressable>
                                            {expandedCard === event.id && (
                                                <View style={styles.extraInfo}>
                                                    <Text style={styles.extraInfoText}>{event.content.body}</Text>
                                                </View>
                                            )}
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
