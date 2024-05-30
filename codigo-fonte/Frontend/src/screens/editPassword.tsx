import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, TextInput, Pressable, ImageBackground, Modal, Alert } from 'react-native';
import styles from '../styles/ProfileStyles';
import ButtonComponent from '../components/Button';
import { Ionicons } from '@expo/vector-icons';
import { getEmail } from '../config/authUtils';
import Title from '../components/Title';
import ImageCheck from '../assets/icon-check.png'
import ImageClose from '../assets/icon-close.png'
import CustomModal from '../components/CustomModal';
import { useForm } from 'react-hook-form';
import axios from 'axios';

interface UserData {
  user_name: string;
  email: string;
}

interface FormData {
  email: string;
  password: string;
}

interface Props {
  navigation: any;
}

export default function EditPassword({ navigation }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [validateInput, setValidateInput] = useState({
    length: false,
    number: false,
    special: false,
    case: false,
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const { control, handleSubmit, formState: { isValid }, setValue } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

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

  const fetchUserData = async () => {
    const emailObtido = await getEmail();
    if (emailObtido !== null) {
      setEmail(emailObtido);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const handleSubmitForm = async () => {
    if (!email || !password) return;

    console.log('Current state:', { email, password });

    try {
      await updateUser(email, password);

    } catch (error: any) {
      console.error('Error updating user:', error);

    }
  };

  async function updateUser(emailInput: string, passwordInput: string) {
    const data = {
      email: emailInput,
      password: passwordInput,
    };

    console.log('Data being sent:', data);

    try {
      const response = await axios.put('https://orquestracriarte-001-site1.htempurl.com/api/recoverypassword/update-password', data);
      if (response.status === 204) {
        console.log('Senha atualizada com sucesso');
        setModalVisible(true);
        fetchUserData();
      } else {
        throw new Error('falha na atulização');
      }

    } catch (error: any) {
      if (error.response && error.response.status === 400) {

      } else {
        console.error('Error:', error.message);
      }
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
    setEmail(userData ? userData.email : '');
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
              <Text style={styles.title}>Redefina sua Senha</Text>
            </View>
            {userData && (
              <View style={[styles.profileInfo, { alignItems: 'center' }]}>
                <Image source={require('../assets/logo.png')} style={styles.avatar} />
                <Text style={styles.label}>Nome:</Text>
                <Text style={styles.text}>{userData.user_name}</Text>
                <Text style={styles.label}>Email:</Text>
                {isEditing
                  ? (
                    <TextInput
                      style={styles.input}
                      defaultValue={userData.email}
                      onChangeText={text => setEmail(text)}
                    />
                  ) : (
                    <Text style={styles.text}>{userData.email}</Text>
                  )}

                {isEditing && (
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
                )}
              </View>
            )}
            <View style={styles.buttonContainer}>
              <ButtonComponent
                text={isEditing ? "Salvar" : "Editar Perfil"}
                onPress={isEditing ? handleSubmitForm : handleEditProfile}
                disabled={isEditing ? !canSave() : false}
              />
              {isEditing && (
                <ButtonComponent text="Cancelar" onPress={handleCancel} />
              )}
            </View>
            {!isEditing && (
              <View style={styles.buttonContainer}>
                <ButtonComponent text="Voltar" onPress={() => navigation.navigate('Home')} />
              </View>
            )}
          </View>
          {modalVisible && (
            <CustomModal
              message="Senha atualizada com sucesso!"
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
