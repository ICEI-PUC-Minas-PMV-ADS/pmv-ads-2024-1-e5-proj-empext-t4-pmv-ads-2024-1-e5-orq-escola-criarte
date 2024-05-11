import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://orquestracriarte-001-site1.htempurl.com/api',

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

export { saveToken, getToken, api };
