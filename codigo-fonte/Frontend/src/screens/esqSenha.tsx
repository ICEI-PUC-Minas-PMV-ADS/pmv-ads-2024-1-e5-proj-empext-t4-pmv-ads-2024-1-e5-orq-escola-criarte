import React, { useState } from "react";
import axios from 'axios';
import ButtonComponent from "../components/Button";
import InputComponent from "../components/Input";
import { View, ImageBackground } from "react-native";
import styles from "../styles/EditPassword";
import { useForm, Controller } from "react-hook-form";

// Definição da interface FormData
interface FormData {
  email: string;
}

// Definição da interface Props
interface Props {
  navigation: any;
}

const EsqSenha: React.FC<Props> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit, formState: { isValid }, getValues, reset } = useForm<FormData>({ mode: 'onChange' });



  const handlePasswordReset = async ({ email }: FormData) => {
    try {
      setIsLoading(true);
      const data = {
        username: "user",
        email: email,
      };

      console.log('Enviando o seguinte objeto para a API:', data);


      //const response = await axios.post('https://orquestracriarte-001-site1.htempurl.com/api/recoverypassword/email-recovery', data);

      // Verificação de resposta da API
      //if (response.status === 200) {
      navigation.navigate('CodeScr');
      //} else {
      //  console.error(`Erro: ${response.status} - ${response.statusText}`);
      //}
    } catch (error) {
      console.error(`Erro ao buscar usuários: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ImageBackground resizeMode="cover" source={require('../assets/background.png')} style={styles.background}>
      <View style={styles.centerContent}>
        <View style={styles.backgroundBox}>
          <View style={styles.formulario}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputComponent
                  onBlur={onBlur}
                  onChange={onChange}
                  placeholder='Digite seu Email'
                  value={value}
                  id="email"
                />
              )}
              name="email"
              rules={{ required: true }}
              defaultValue=""
            />

            <ButtonComponent
              onPress={handleSubmit(handlePasswordReset)}
              disabled={isLoading}
              text="Recuperar senha"
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

export default EsqSenha;
