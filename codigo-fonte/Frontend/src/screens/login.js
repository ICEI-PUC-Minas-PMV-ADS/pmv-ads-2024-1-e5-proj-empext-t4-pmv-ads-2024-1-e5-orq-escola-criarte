import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import ButtonComponent from '../components/Button';
import InputComponent from '../components/Input'
import loginScreenStyles from '../styles/LoginScreenStyles';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <ImageBackground source={require('../assets/background.png')} style={loginScreenStyles.background}>
        <View style={loginScreenStyles.container}>

          <Image style={loginScreenStyles.logo} source={require('../assets/logo.png')} />
          <InputComponent label="Usuário" />
          <InputComponent label="Senha" secureTextEntry />
          <ButtonComponent onPress={() => navigation.navigate('Routes')} mode="contained" text="Entrar" />
          <ButtonComponent mode="text" onPress={() => console.log('Esqueci minha senha')} text="Esqueci minha senha" />
        </View>

        <View style={loginScreenStyles.buttonConteiner}  >
          <ButtonComponent style={loginScreenStyles.botaoCadastrar} onPress={() => navigation.navigate('Cadastro')} text="Cadastre-se" />
        </View>
        

      </ImageBackground>
    </SafeAreaProvider>
  );
}

export default LoginScreen;
