import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { List, Divider } from 'react-native-paper';

interface Attendee {
  name: string;
  email: string;
}

interface Musician {
  name: string;
  instrument: string;
}

export default function AdminScreen() {
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const [musicians, setMusicians] = useState<Musician[]>([]);

  // Substitua isso pela sua lógica para buscar os dados
  useEffect(() => {
    fetchAttendeesAndMusicians();
  }, []);

  const fetchAttendeesAndMusicians = async () => {
    // Busque os dados dos participantes e músicos aqui
    // e atualize o estado com setAttendees e setMusicians
  };

  return (
    <ScrollView>
      <List.Section>
        <List.Subheader>Participantes Confirmados</List.Subheader>
        {attendees.map((attendee, index) => (
          <View key={index}>
            <List.Item title={attendee.name} description={attendee.email} />
            <Divider />
          </View>
        ))}
      </List.Section>

      <List.Section>
        <List.Subheader>Músicos Confirmados</List.Subheader>
        {musicians.map((musician, index) => (
          <View key={index}>
            <List.Item title={musician.name} description={musician.instrument} />
            <Divider />
          </View>
        ))}
      </List.Section>
    </ScrollView>
  );
}
