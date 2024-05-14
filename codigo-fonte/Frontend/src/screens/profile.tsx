import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, TextInput, Pressable, ImageBackground } from 'react-native';
import styles from '../styles/ProfileStyles';
import ButtonComponent from '../components/Button';
import { Ionicons } from '@expo/vector-icons';
import { jwtDecode } from 'jwt-decode';
import { getToken, api } from '../config/authUtils';
import Title from '../components/Title';
import ImageCheck from '../assets/icon-check.png'
import ImageClose from '../assets/icon-close.png'
import CustomModal from '../components/CustomModal';
import { useNavigation } from '@react-navigation/native';

interface UserData {
  'user_name': string;
  'email': string;
  'role': string;
  'user_id': string;
  exp: number;
}

interface Props {
  navigation: any;
}

export default function ProfileScreen({ navigation }: Props) {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState<boolean>(false);
  const [updateError, setUpdateError] = useState(null);
  const role = userData ? userData['role'] : '';
  const [validateInput, setValidateInput] = useState({
    length: false,
    number: false,
    special: false,
    case: false,
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const secureText = (password: string, confirmPassword: string) => {
    const regexUppercase = RegExp(/^(?=.*[A-Z]).+$/);
    const regexSpecial = RegExp(/^(?=.*\W).+$/);
    const regexNumber = RegExp(/^(?=.*[0-9]).+$/);
    const length = password.length >= 8;

    setValidateInput({
      case: regexUppercase.test(password),
      number: regexNumber.test(password),
      special: regexSpecial.test(password),
      length,
    });

    setPasswordsMatch(password === confirmPassword);
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  async function fetchUserData() {
    try {
      const token = await getToken();
      if (token) {
        const decoded = jwtDecode<UserData>(token);
        setUserData(decoded);
        console.log(userData);
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

    console.log('Current state:', { role });

    try {
      await updateUser(userData['user_id'], email, userData['user_name'], role);
      setUpdateError(null);
      fetchUserData();
    } catch (error: any) {
      console.error('Error updating user:', error);
      setUpdateError(error.message);
    }
  };

  async function updateUser(id: string, emailInput: string, name: string, role: string) {
    if (!userData) return;
    const url = `/users/${id}`;
    const roleValue = role === 'Admin' ? 1 : 2;
    const email = emailInput ? emailInput : userData.email;
    const data = {
      name,
      password,
      email,
      role: roleValue
    };

    console.log('Data being sent:', data, id);

    try {
      const response = await api.put(url, data);
      if (response.status === 204) {
        console.log('Usuario Atualizado com sucesso');
        setModalVisible(true);
        fetchUserData();
      } else {
        throw new Error('falha na atulização');
      }

    } catch (error: any) {
      console.error('Error:', error.message);
    }
  }

  const canSave = () => {
    return (
      password === confirmPassword &&
      validateInput.length &&
      validateInput.number &&
      validateInput.special &&
      validateInput.case
    );
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEmail(userData ? userData['email'] : '');

  };

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  return (
    <ImageBackground resizeMode="cover" source={require('../assets/background.png')} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.content}>
          <View style={styles.centerContent}>
            <View style={styles.header}>
              <Text style={styles.title}>Perfil</Text>
            </View>
            {userData && (
              <View style={[styles.profileInfo, { alignItems: 'center' }]}>
                <Image source={require('../assets/logo.png')} style={styles.avatar} />
                <Text style={styles.label}>Nome:</Text>
                <Text style={styles.text}>{userData['user_name']}</Text>
                <Text style={styles.label}>Email:</Text>
                {isEditing ? (
                  <TextInput
                    style={styles.input}
                    defaultValue={userData['email']}
                    onChangeText={text => setEmail(text)}
                  />
                ) : (
                  <Text style={styles.text}>{userData['email']}</Text>
                )}

                {isEditing ? (
                  <>
                    <Text style={styles.label}>Senha:</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%' }}>
                      <TextInput
                        style={[styles.input, { flex: 1, width: '100%' }]}
                        secureTextEntry={!senhaVisivel}
                        onChangeText={(text) => {
                          setPassword(text);
                          secureText(text, confirmPassword);
                        }}
                      />
                      <Pressable onPress={() => setSenhaVisivel(!senhaVisivel)}>
                        <Ionicons name={senhaVisivel ? 'eye-off' : 'eye'} size={24} style={styles.eyeIcon} />
                      </Pressable>
                    </View>
                  </>
                ) : null}

                {isEditing ? (
                  <>
                    <Text style={styles.label}>Confirmar Senha:</Text>
                    <TextInput
                      style={styles.input}
                      secureTextEntry={!senhaVisivel}
                      onChangeText={(text) => {
                        setConfirmPassword(text);
                        secureText(password, text);
                      }}
                    />
                    {!passwordsMatch && <Text style={{ color: 'red' }}>As senhas não conferem.</Text>}
                    <View>
                      <Title title='Sua senha deve ter:' />

                      <View style={styles.requisitos}>
                        <Image style={styles.checkLogo} source={validateInput.length ? ImageCheck : ImageClose} />
                        <Text style={styles.text}> 8 Caracteres</Text>
                      </View>
                      <View style={styles.requisitos}>
                        <Image style={styles.checkLogo} source={validateInput.number ? ImageCheck : ImageClose} />
                        <Text style={styles.text}> Pelo menos um número</Text>
                      </View>
                      <View style={styles.requisitos}>
                        <Image style={styles.checkLogo} source={validateInput.special ? ImageCheck : ImageClose} />
                        <Text style={styles.text}> Pelo menos um caractere especial</Text>
                      </View>
                      <View style={styles.requisitos}>
                        <Image style={styles.checkLogo} source={validateInput.case ? ImageCheck : ImageClose} />
                        <Text style={styles.text}> Pelo menos uma letra maiúscula</Text>
                      </View>
                    </View>
                  </>
                ) : null}
              </View>
            )}
            <View style={styles.buttonContainer}>
              <ButtonComponent
                style={{ width: '90%', alignSelf: 'center' }}
                text={isEditing ? "Salvar" : "Editar Perfil"}
                onPress={isEditing ? handleSubmit : handleEditProfile}
                disabled={isEditing ? !canSave() : false}
              />
              {isEditing && (
                <ButtonComponent text="Cancelar" onPress={handleCancel} />
              )}
            </View>
            {!isEditing && (
              <View style={styles.buttonContainer}>
                <ButtonComponent style={{ width: '80%', alignSelf: 'center' }} text="Voltar" onPress={() => navigation.navigate('Home')} />
              </View>
            )}
          </View>
          {modalVisible && (
            <CustomModal
              message="Dados atualizados com sucesso!"
              onOk={() => {
                setModalVisible(false);
                handleLogout();
              }}
            />
          )}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
