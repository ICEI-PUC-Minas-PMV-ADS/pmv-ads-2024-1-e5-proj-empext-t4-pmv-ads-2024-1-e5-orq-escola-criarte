import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import ButtonComponent from '../components/Button';
import InputComponent from '../components/Input'
import loginScreenStyles from '../styles/LoginScreenStyles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () =>{
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>         
      <ImageBackground source={require('../assets/background.jpg')} style={loginScreenStyles.background}>
        <View style={loginScreenStyles.container}>
          <InputComponent label="Usuário" />
          <InputComponent label="Senha" secureTextEntry />
          <ButtonComponent mode="text" onPress={() => console.log('Esqueci minha senha')} text="Esqueci minha senha" />
          <ButtonComponent onPress={() => navigation.navigate('Cadastro')} text="Cadastre-se" />
          <ButtonComponent onPress={() => navigation.navigate('Routes')} mode="contained" text="Entrar" />          
        </View>
      </ImageBackground>            
    </SafeAreaProvider>
  );
}

export default LoginScreen;
