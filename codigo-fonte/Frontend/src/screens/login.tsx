import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ImageBackground, Image, Modal, ActivityIndicator, Dimensions, Platform } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import styles from '../styles/LoginScreenStyles';
import InputComponent from '../components/Input';
import ButtonComponent from '../components/Button';
import { Ionicons } from '@expo/vector-icons';
import { saveToken } from '../config/authUtils';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface FormData {
    email: string;
    senha: string;
}

interface Props {
    navigation: any;
}

export default function CadastroScreen({ navigation }: Props) {
    const { control, handleSubmit, formState: { isValid }, getValues } = useForm<FormData>({ mode: 'onChange' });
    const [senhaVisivel, setSenhaVisivel] = useState<boolean>(false);
    const [errorModalVisible, setErrorModalVisible] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false);
    const [logoSize, setLogoSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const calculateLogoSize = () => {
            const { width, height } = Image.resolveAssetSource(require('../assets/logo.png'));
            const screenWidth = Dimensions.get('window').width;
            const logoWidth = screenWidth * 0.45;
            const logoHeight = (height / width) * logoWidth;
            setLogoSize({ width: logoWidth, height: logoHeight });
        };

        calculateLogoSize();
    }, []);

    const handleLogin = async (response: any) => {
        setIsLoading(true);
        const token = response.data.token;
        await saveToken(token);
        setIsLoading(false);
    };

    const handleFormSubmit = (data: FormData) => {
        console.log(data);
        setIsLoading(true);
        const headers = {
            'accept': ' */*',
            'Content-Type': ' application/json'
        }
        const dados = {
            "email": data.email,
            "password": data.senha
        }
        axios.post("https://orquestracriarte-001-site1.htempurl.com/api/account/login", dados, { headers }).then((Response) => {
            console.log(Response)
            handleLogin(Response);
            console.log("voce está logado")
            navigation.navigate('Routes')
        }
        ).catch((error) => {
            console.log(error)
            console.log("usuário e/ou senha incorretos!")
            setIsLoading(false);
            setErrorModalVisible(true);
        }
        )
            .finally(() => setIsLoading(false));
    };

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            enableOnAndroid={true}
            extraScrollHeight={Platform.select({ android: 100, ios: 130 })}
            keyboardOpeningTime={0}
        >
            <ImageBackground resizeMode='cover' source={require('../assets/background.jpg')} style={styles.background}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.content}>
                        <View style={styles.centerContent}>
                            <View style={styles.header}>
                                <Image style={[styles.logo, { width: logoSize.width, height: logoSize.height }]} source={require('../assets/logo.png')} />
                            </View>
                            <View style={styles.formulario}>
                                <Text style={styles.texto}>Email:</Text>
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <InputComponent
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            placeholder='exemplo@exemplo.com'
                                            value={value}
                                            id="email"
                                        />
                                    )}
                                    name="email"
                                    rules={{ required: true }}
                                    defaultValue=""
                                />
                                <Text style={styles.texto}>Senha:</Text>
                                <Controller
                                    control={control}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <InputComponent
                                                secureTextEntry={!senhaVisivel}
                                                onBlur={onBlur}
                                                onChange={onChange}
                                                placeholder='**********'
                                                value={value}
                                                id="senha"
                                            />
                                            <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
                                                <Ionicons name={senhaVisivel ? 'eye-off' : 'eye'} size={24} color="#413267" style={styles.eyeIcon} />
                                            </TouchableOpacity>
                                        </View>
                                    )}
                                    name="senha"
                                    rules={{ required: true }}
                                    defaultValue=""
                                />
                                <View style={styles.SignInButton}>
                                    {isLoading ? (
                                        <ActivityIndicator
                                            size="large"
                                            color="#413267"
                                            animating={true}
                                            style={{
                                                alignSelf: 'center',
                                                justifyContent: 'center',
                                                marginBottom: 5,
                                            }}
                                        />
                                    ) : (
                                        <ButtonComponent
                                            onPress={handleSubmit(handleFormSubmit)}
                                            mode="contained"
                                            text="Entrar"
                                        />
                                    )}
                                    <ButtonComponent
                                        onPress={() => navigation.navigate('EsqSenha')}
                                        text="Esqueci minha senha"
                                        mode='text'
                                    />
                                    <ButtonComponent
                                        onPress={() => navigation.navigate('Cadastro')}
                                        text="Cadastrar"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                </SafeAreaView>
                {/* Modal de Erro */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={errorModalVisible}
                    onRequestClose={() => {
                        setErrorModalVisible(false);
                    }}
                >
                    <View style={styles.errorModalContainer}>
                        <View style={styles.errorModalContent}>
                            <Text style={styles.errorModalText}>Email e/ou senha incorretos!</Text>
                            <TouchableOpacity onPress={() => setErrorModalVisible(false)} style={styles.errorModalButton}>
                                <Text style={styles.errorModalButtonText}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </ImageBackground>
        </KeyboardAwareScrollView>
    );
}
