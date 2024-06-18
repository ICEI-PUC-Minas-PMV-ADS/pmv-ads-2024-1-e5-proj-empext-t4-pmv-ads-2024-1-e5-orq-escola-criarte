import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, TextInput, Pressable, ImageBackground, Modal } from 'react-native';
import styles from '../styles/EditPassword';
import ButtonComponent from '../components/Button';
import { Ionicons } from '@expo/vector-icons';
import { getEmail } from '../config/authUtils';
import Title from '../components/Title';
import ImageCheck from '../assets/icon-check.png';
import ImageClose from '../assets/icon-close.png';
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

  useEffect(() => {
    const fetchEmail = async () => {
      const emailObtido = await getEmail();
      if (emailObtido !== null) {
        setEmail(emailObtido);
      }
    };

    fetchEmail();
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
      if (response.status === 200) {
        console.log('Senha atualizada com sucesso');
        setModalVisible(true);
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

  return (
    <ImageBackground resizeMode="cover" source={require('../assets/background.jpg')} style={styles.background}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Redefina sua Senha</Text>
          </View>
          <View style={[styles.centerContent, styles.backgroundBox]}>

            <Text style={styles.label}>Email:</Text>
            <Text style={styles.text}>{email}</Text>

            <Text style={styles.label}>Nova Senha:</Text>
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

            <Text style={styles.label}>Confirmar nova Senha:</Text>
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
            <View style={{ marginTop: 15, width: '100%', alignItems: 'center' }}>
              <View style={styles.buttonContainer}>
                <ButtonComponent text="Salvar" onPress={handleSubmitForm} disabled={!canSave()} />
              </View>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}