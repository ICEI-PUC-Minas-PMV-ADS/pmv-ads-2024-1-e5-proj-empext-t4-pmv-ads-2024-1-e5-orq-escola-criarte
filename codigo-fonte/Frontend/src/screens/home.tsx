import React, { useEffect, useState } from "react";
import { ScrollView, View, Image, Alert, ImageBackground, Platform, Text, Pressable, ActivityIndicator, Linking } from "react-native";
import styles from "../styles/HomeScreenStyles";
import { api, getToken } from '../config/authUtils';
import { jwtDecode } from 'jwt-decode';
import CreateNewsModal from "../components/NewNews";
import { Ionicons } from '@expo/vector-icons';
import { decode } from "base-64";

global.atob = decode;

interface News {
  id: string;
  title: string;
  description: string;
  imageURL: string;
}

interface UserData {
  'role': string;
}

interface Props {
  navigation: any;
}

const News = ({ navigation }: Props) => {
  const [news, setNews] = useState<News[]>([]);
  const [userRole, setUserRole] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  const fetchNews = () => {
    setIsLoading(true);
    api.get<News[]>('/news')
      .then(response => {
        const reversedNews = response.data.reverse();
        setNews(reversedNews);
        setIsLoading(false);
        console.log(reversedNews)
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const deleteNews = async (id: string) => {
    try {
        await api.delete(`/news/${id}`);
        fetchNews();
    } catch (error) {
        console.error(error);
    }
};

  const confirmDelete = (id: string) => {
    if (Platform.OS === 'web') {
        const userResponse = window.confirm("Tem certeza de que deseja deletar este evento?");
        if (userResponse) {
            deleteNews(id);
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
                { text: "OK", onPress: () => deleteNews(id) }
            ],
            { cancelable: false }
        );
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
    fetchUserRole();
  }, []);

  const closeModal = () => {
    setIsModalVisible(false);
    fetchNews();
  };

  return (
    <ImageBackground resizeMode="cover" source={require('../assets/background.png')} style={styles.background}>
      <View style={{ flex: 1 }}>
        {isLoading ? (
          <View style={{ height: "100%", justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.15)' }}>
            <ActivityIndicator size="large" color="#413267" style={{ zIndex: 1 }} />
          </View>
        ) : (
          <ScrollView contentContainerStyle={styles.container}>
            {news.map((news, index) => (
              <View key={index} style={styles.rectangle}>
                <Image
                  source={{ uri: news.imageURL }}
                  style={styles.image}
                />
                <Text style={styles.title}>{news.title}</Text>
                <Text style={styles.body}>{news.description}</Text>
                <View style={styles.border} />
                <Pressable onPress={() => Linking.openURL('https://wa.me/553134588718')}>
                  <Text style={styles.info}>Para mais informações entre em contato</Text>
                </Pressable>
                {userRole === 'Admin' && (
                  <Pressable
                    style={styles.deleteButton}
                    onPress={() => {
                      console.log('Botão "Deletar" pressionado');
                      confirmDelete(news.id);
                    }}
                  >
                    <Ionicons name="trash-outline" size={24} color="red" />
                  </Pressable>
                )}
              </View>
            ))}
          </ScrollView>
        )}
        {userRole === 'Admin' && (
          <Pressable
            style={styles.createNewsButton}
            onPress={() => {
              console.log('Botão pressionado');
              setIsModalVisible(true);
            }}
          >
            <Text style={styles.createNewsButtonText}>Criar Notícia</Text>
          </Pressable>
        )}
        <View>
          <CreateNewsModal visible={isModalVisible} onClose={closeModal} onUpdate={fetchNews} />
        </View>
      </View>
    </ImageBackground>
  );
}
export default News;