import React, { useState } from "react";
import axios from 'axios';
import { useForm, Controller } from "react-hook-form";
import { View, ImageBackground, ActivityIndicator } from "react-native";
import ButtonComponent from "../components/Button";
import InputComponent from "../components/Input";
import styles from "../styles/CadastroScreenStyles";

interface Props {
  navigation: any;
}

interface FormData {
  code: string;
  email: string;
}

export default function CodeScr({ navigation }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit, formState: { isValid }, reset } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      code: '',
    },
  });

  const handlePasswordReset = async (data: FormData) => {
    const { code, email } = data;
    try {
      setIsLoading(true);
      console.log('Enviando o seguinte objeto para a API:', data);

      const response = await axios.get(`https://orquestracriarte-001-site1.htempurl.com/api/recoverypassword/validate-code?email=${email}&code=${code}`);
      console.log(response);
      navigation.navigate('EditPassword');
    } catch (error) {
      console.error(`Erro ao buscar usuários: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ImageBackground resizeMode="cover" source={require('../assets/background.png')} style={styles.background}>
      <View style={styles.centerContent}>
        <View style={styles.formulario}>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputComponent
                id="Email"
                placeholder="Digite seu email"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
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
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <ButtonComponent
              onPress={handleSubmit(handlePasswordReset)}
              disabled={!isValid || isLoading}
              text="Recuperar senha"
            />
          )}
        </View>
      </View>
    </ImageBackground>
  );
}
