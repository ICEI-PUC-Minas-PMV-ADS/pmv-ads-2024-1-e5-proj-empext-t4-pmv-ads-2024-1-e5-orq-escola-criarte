import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useForm, Controller } from "react-hook-form";
import { getEmail } from '../config/authUtils';
import { View, ImageBackground, ActivityIndicator, Text, Alert } from "react-native";
import ButtonComponent from "../components/Button";
import InputComponent from "../components/Input";
import styles from "../styles/EditPassword";

interface Props {
  navigation: any;
}

interface FormData {
  code: string;
  email: string;
}

export default function CodeScr({ navigation }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit, formState: { isValid }, setValue } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      code: '',
    },
  });

  useEffect(() => {
    const fetchEmail = async () => {
      const email = await getEmail();
      if (email !== null) {
        setValue('email', email);
      } else {
        setValue('email', '');
      }
    };

    fetchEmail();
  }, [setValue]);

  const handlePasswordReset = async (data: FormData) => {
    const { code, email } = data;
    try {
      setIsLoading(true);
      console.log('Enviando o seguinte objeto para a API:', data);
  
      const response = await axios.get(`https://orquestracriarte-001-site1.htempurl.com/api/recoverypassword/validate-code?email=${email}&code=${code}`);
      console.log(response);
  
      // Verifique se a resposta é true
      if (response.data === true) {
        // Navegue para a próxima tela
        navigation.navigate('EditPassword');
      } else {
        // Caso contrário, exiba o alerta
        Alert.alert(
          "Código Incorreto",
          "Código incorreto ou expirado!",
          [{ text: "OK", style: "cancel" }],
          { cancelable: false }
        );
        console.log('A resposta da API não foi true');
      }
    } catch (error) {
      console.error(`Erro: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ImageBackground resizeMode="cover" source={require('../assets/background.jpg')} style={styles.background}>
      <View style={styles.centerContent}>
        <View style={styles.backgroundBox}>
          <View style={styles.formulario}>
            <Text style={styles.title}>Digite o código recebido:</Text>
            <Controller
              control={control}
              name="email"
              render={({ field: { value } }) => (
                <InputComponent
                  id="Email"
                  placeholder="Digite seu email"
                  value={value}
                  editable={false}
                />
              )}
              rules={{ required: true }}
            />
            <Controller
              control={control}
              name="code"
              render={({ field: { onChange, onBlur, value } }) => (
                <InputComponent
                  id="Código"
                  placeholder="Digite o código"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
              rules={{ required: true }}
            />
            {isLoading ? (
              <ActivityIndicator style={{marginBottom: 10}} size="large" color="#413267" />
            ) : (
              <ButtonComponent
                onPress={handleSubmit(handlePasswordReset)}
                disabled={!isValid || isLoading}
                text="Enviar Código"
              />
            )}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
