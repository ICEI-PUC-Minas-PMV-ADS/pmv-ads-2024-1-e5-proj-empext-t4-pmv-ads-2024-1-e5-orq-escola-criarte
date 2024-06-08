import React, { useState } from "react";
import { View, ImageBackground, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import CustomModal from '../components/CustomModal';
import ButtonComponent from "../components/Button";
import InputComponent from "../components/Input";
import styles from "../styles/EditPassword";
import { saveEmail } from '../config/authUtils';
import axios from "axios";

interface FormData {
  email: string;
}

interface Props {
  navigation: any;
}

const EsqSenha: React.FC<Props> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const { control, handleSubmit, formState: { isValid }, getValues, reset } = useForm<FormData>({ mode: 'onChange' });
  const [modalVisible, setModalVisible] = useState(false);

  const handlePasswordReset = async ({ email }: FormData) => {
    setModalVisible(true);
    try {
      setIsLoading(true);
      const data = {
        username: "user",
        email: email,
      };

      await saveEmail(data.email);

      console.log('Enviando o seguinte objeto para a API:', data);

      const response = await axios.post('https://orquestracriarte-001-site1.htempurl.com/api/recoverypassword/email-recovery', data);

      if (response.status === 200) {

      } else {
        console.error(`Erro: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Erro ao buscar usuários: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleModalOk = () => {
    setModalVisible(false);
    setIsButtonLoading(true);
    setTimeout(() => {
      setIsButtonLoading(false);
      navigation.navigate('CodeScr');
    }, 5000);
  };

  return (
    <ImageBackground resizeMode="cover" source={require('../assets/background.png')} style={styles.background}>
      <View style={styles.centerContent}>
        <View style={styles.backgroundBox}>
          <View style={styles.formulario}>
            <Text style={styles.title}>Digite seu email:</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputComponent
                  onBlur={onBlur}
                  onChange={onChange}
                  placeholder='exemplo@email.com'
                  value={value}
                  id="email"
                />
              )}
              name="email"
              rules={{ required: true }}
              defaultValue=""
            />
            <ButtonComponent
              style={{ width: '80%', alignSelf: 'center' }}
              onPress={handleSubmit(handlePasswordReset)}
              disabled={isLoading}
              isLoading={isButtonLoading}
              text="Recuperar senha"
            />
          </View>
        </View>
        {modalVisible && (
          <CustomModal
            message="Um código para recuperar sua senha foi enviado para seu email"
            onOk={handleModalOk}
          />
        )}
      </View>
    </ImageBackground>
  );
}

export default EsqSenha;
