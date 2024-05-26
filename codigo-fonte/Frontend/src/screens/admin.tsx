import React, { useState, useEffect } from 'react';
import { api } from '../config/authUtils';
import { View, Text, ActivityIndicator, ImageBackground, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/AdminScreenStyles';
import Button from '../components/Button'

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

interface Person {
  userName: string;
  email: string;
  personType: number;
  eventId: string;
}

export default function AdminScreen() {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<string>('');
  const [selectedPersonType, setSelectedPersonType] = useState<number>(2);
  const [eventPersons, setEventPersons] = useState<Person[]>([]);
  const [peopleCount, setPeopleCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchEvents = async () => {
    try {
      const response = await api.get<Event[]>('/newsfeed');
      setEvents(response.data);
    } catch (error) {
      console.error(error);
      setErrorMessage('Erro ao buscar eventos. Tente novamente mais tarde.');
    }
  };

  const fetchAttendeesAndMusicians = async (id: string, personType: number) => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const postResponse = await api.get(`/posts/${id}`);
      const eventId = postResponse.data.eventId;

      if (!eventId) {
        setErrorMessage('eventId não encontrado na resposta da API do post.');
        setIsLoading(false);
        return;
      }

      const response = await api.get(`/eventpersons?eventId=${eventId}&personType=${personType}`);
      setEventPersons(response.data.eventPeople);
      setPeopleCount(response.data.peopleCount);
    } catch (error) {
      console.error(error);
      setErrorMessage('Erro ao buscar participantes. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <>
      <ImageBackground resizeMode="cover" source={require('../assets/background.png')} style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.hederText}>Relatório Admin</Text>
        </View>

        <View style={styles.conteiner}>
          <Text style={styles.subHeader}>
            Selecione o Evento para ter o relatório
          </Text>

          <View style={styles.pickerContainer}>
            <Picker
              style={styles.pickers}
              selectedValue={selectedEvent}
              onValueChange={(itemValue) => setSelectedEvent(itemValue)}
            >
              <Picker.Item label="Selecione um evento" value="" />
              {events.map((event, index) => (
                <Picker.Item key={index} label={event.content.title} value={event.id} />
              ))}
            </Picker>
          </View>

          <View style={styles.pickerContainer}>
            <Picker
              style={styles.pickers}
              selectedValue={selectedPersonType}
              onValueChange={(itemValue) => setSelectedPersonType(itemValue)}
            >
              <Picker.Item label="Todos" value={2} />
              <Picker.Item label="Músico" value={0} />
              <Picker.Item label="Espectador" value={1} />
            </Picker>
          </View>

          <Button
            style={{ width: '90%', alignSelf: 'center', }}
            text="Obter Relatório"
            onPress={() => fetchAttendeesAndMusicians(selectedEvent, selectedPersonType)}
          />

          {isLoading ? (
            <ActivityIndicator size="large" color="#413267" style={{ zIndex: 1, marginTop: 20 }} />
          ) : (
            <>
              {errorMessage ? (
                <Text style={styles.errorText}>{errorMessage}</Text>
              ) : (
                <ScrollView>
                  <View style={styles.row1}>
                    {peopleCount > 0 && (
                      <Text style={styles.peopleCount}>
                        Total de Pessoas: {peopleCount}
                      </Text>
                    )}
                    {eventPersons.length === 0 ? (
                      <Text style={{ marginTop: 20, marginBottom: 20, textAlign: 'center' }}>Nenhum participante encontrado.</Text>
                    ) : (
                      eventPersons.map((person, index) => (
                        <View key={index} style={styles.personItem}>
                          <Text style={styles.personName}>{person.userName}</Text>
                          <Text style={styles.personEmail}>{person.email}</Text>
                          <Text style={styles.personType}>
                            {person.personType === 0 ? 'Músico' : 'Espectador'}
                          </Text>
                        </View>
                      ))
                    )}
                  </View>
                </ScrollView>
              )}
            </>
          )}
        </View>
      </ImageBackground>
    </>
  );
}
