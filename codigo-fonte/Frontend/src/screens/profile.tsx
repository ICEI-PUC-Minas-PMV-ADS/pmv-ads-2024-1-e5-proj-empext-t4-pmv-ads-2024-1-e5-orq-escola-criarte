import React, { useState, useEffect } from 'react';
import { View, Text, Image, ImageBackground, ScrollView, SafeAreaView, TextInput } from 'react-native';
import styles from '../styles/ProfileStyles';
import loginScreenStyles from '../styles/LoginScreenStyles';
import ButtonComponent from '../components/Button';
import { jwtDecode } from 'jwt-decode';
import { getToken, api } from '../config/authUtils';

interface UserData {
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name': string;
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress': string;
  'http://schemas.microsoft.com/ws/2008/06/identity/claims/role': string;
  'http://schemas.microsoft.com/ws/2008/06/identity/claims/primarysid': string;
  exp: number;
}

interface Props {
  navigation: any;
}

export default function ProfileScreen({ navigation }: Props) {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [updateError, setUpdateError] = useState(null);
  const role = userData ? userData['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] : '';

  async function fetchUserData() {
    try {
      const token = await getToken();
      if (token) {
        const decoded = jwtDecode<UserData>(token);
        setUserData(decoded);
      } else {
        console.log('Token é nulo');
      }
    } catch (error) {
      console.error("Erro ao obter os dados do usuário:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSubmit = async () => {
    if (!userData) return;

    console.log('Current state:', { name, email });

    try {
      await updateUser(userData['http://schemas.microsoft.com/ws/2008/06/identity/claims/primarysid'], name, email);
      setUpdateError(null);
      fetchUserData();
    } catch (error: any) {
      console.error('Error updating user:', error);
      setUpdateError(error.message);
    }
  };

  async function updateUser(id: string, name: string, email: string) {
    const url = `https://localhost:7290/api/users/${id}`;
    const data = { name, email, password, role };

    console.log('Data being sent:', data, id);

    try {
      const response = await api.put(url, data);
      if (response.status === 200) {
        console.log('Usuario Atualizado com sucesso');
      } else {
        console.error('falha na atulização:', response.statusText);
        throw new Error('falha na atulização');
      }
    } catch (error) {
      throw error;
    }
  }



  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  return (
    <ImageBackground source={require('../assets/background.png')} style={loginScreenStyles.background}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.content}>
          <View style={styles.centerContent}>
            <View style={styles.header}>
              <Text style={styles.title}>Perfil</Text>
            </View>
            {userData && (
              <View style={styles.profileInfo}>
                <Image source={require('../assets/avatar.png')} style={styles.avatar} />
                <Text style={styles.label}>Nome:</Text>
                {isEditing ? (
                  <TextInput
                    style={styles.input}
                    defaultValue={userData['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']}
                    onChangeText={text => setName(text)}
                  />
                ) : (
                  <Text style={styles.text}>{userData['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']}</Text>
                )}
                <Text style={styles.label}>Email:</Text>
                {isEditing ? (
                  <TextInput
                    style={styles.input}
                    defaultValue={userData['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress']}
                    onChangeText={text => setEmail(text)}
                  />
                ) : (
                  <Text style={styles.text}>{userData['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress']}</Text>
                )}
                <Text style={styles.label}>Senha:</Text>
                {isEditing ? (
                  <TextInput
                    style={styles.input}
                    secureTextEntry
                    onChangeText={text => setPassword(text)}
                  />
                ) : null}
              </View>
            )}
            <View style={styles.buttonContainer}>
              <ButtonComponent text={isEditing ? "Salvar" : "Editar Perfil"} onPress={isEditing ? handleSubmit : handleEditProfile} />
            </View>
            <View style={styles.buttonContainer}>
              <ButtonComponent text="Sair" onPress={() => navigation.navigate('Home')} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
