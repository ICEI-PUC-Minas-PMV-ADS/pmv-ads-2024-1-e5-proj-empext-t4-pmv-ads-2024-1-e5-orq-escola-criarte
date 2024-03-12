import * as React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Appbar, Avatar, Text, List } from 'react-native-paper';

interface Evento {
  nome: string;
  descricao: string;
  contato: string;
}

const HomeScreen: React.FC = () => {
  // Suponha que você tenha uma lista de tipos de evento
  const eventos: Evento[] = [
    { nome: 'Yoga', descricao: 'Aprenda posturas de yoga para relaxamento.', contato: 'yoga@escola.com' },
    { nome: 'Aula de Dança', descricao: 'Aprenda a dançar vários estilos de dança.', contato: 'danca@escola.com' },
    // Adicione mais eventos conforme necessário
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Barra de Navegação */}
      <Appbar.Header>
        <Appbar.Action icon="calendar" onPress={() => console.log('Abrir agenda de eventos')} />
        <Appbar.Content title="Home Page da Escola" />
        <Appbar.Action icon="account" onPress={() => console.log('Abrir perfil')} />
        <Appbar.Action icon="logout" onPress={() => console.log('Fazer logoff')} />
      </Appbar.Header>

      {/* Conteúdo da Tela */}
      <ScrollView>
        {/* Perfil do Usuário */}
        <View style={{ alignItems: 'center', marginVertical: 20 }}>
          <Avatar.Image size={80} source={require('../assets/background.jpg')} />
          <Text style={{ marginTop: 10 }}>Olá, [Nome do Usuário]</Text>
        </View>

        {/* Lista de Tipos de Evento */}
        {eventos.map((evento, index) => (
          <List.Item
            key={index}
            title={evento.nome}
            description={evento.descricao}
            onPress={() => console.log('Detalhes do evento: ', evento.nome)}
            right={() => <List.Icon icon="arrow-right" />}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
