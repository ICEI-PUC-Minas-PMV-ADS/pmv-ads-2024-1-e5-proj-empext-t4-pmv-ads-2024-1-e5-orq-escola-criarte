import React, { useEffect, useState } from "react";
import { ScrollView, View, Image, ImageBackground, Text, Pressable, ActivityIndicator } from "react-native";
import styles from "../styles/HomeScreenStyles";
import { api, getToken } from '../config/authUtils';
import { jwtDecode } from 'jwt-decode';
import CreateNewsModal from "../components/NewNews";

interface News {
  title: string;
  description: string;
  imageURL: string;
}

interface UserData {
  'role': string;
}

const News = () => {
  const [news, setNews] = useState<News[]>([]);
  const [userRole, setUserRole] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchNews = () => {
    setIsLoading(true);
    api.get<News[]>('/news')
      .then(response => {
        setNews(response.data);
        setIsLoading(false);
        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);


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