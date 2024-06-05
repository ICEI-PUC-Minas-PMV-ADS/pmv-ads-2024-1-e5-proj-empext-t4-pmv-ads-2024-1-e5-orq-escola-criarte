import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'https://orquestracriarte-001-site1.htempurl.com/api',

});

api.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept'] = '*/*';
  return config;
});

const saveToken = async (token) => {
  try {
    await AsyncStorage.setItem('token', token);
    console.log('Token salvo com sucesso.');
    console.log(token);
  } catch (error) {
    console.error('Erro ao salvar o token do usuário:', error);
  }
};

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      return token;
    } else {
      console.log('Nenhum token encontrado.');
      return null;
    }
  } catch (error) {
    console.error('Erro ao obter o token:', error);
    return null;
  }
};

const saveEmail = async (email) => {
  try {
    await AsyncStorage.setItem('email', email);
    console.log('Email salvo com sucesso.');
    console.log(email);
  } catch (error) {
    console.error('Erro ao salvar o email do usuário:', error);
  }
};

const getEmail = async () => {
  try {
    const email = await AsyncStorage.getItem('email');
    if (email !== null) {
      return email;
    } else {
      console.log('Nenhum email encontrado.');
      return null;
    }
  } catch (error) {
    console.error('Erro ao obter o email:', error);
    return null;
  }
};

export { saveToken, getToken, saveEmail, getEmail, api };
