import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground, Image } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import styles from '../styles/CadastroScreenStyles';
import InputComponent from '../components/Input';
import ButtonComponent from '../components/Button';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import loginScreenStyles from '../styles/LoginScreenStyles';

interface FormData {
    email: string;
    senha: string;
}

interface Props {
    navigation: any; // você pode definir um tipo mais específico para navigation se preferir
}

export default function CadastroScreen({ navigation }: Props) {
    const { control, handleSubmit, formState: { isValid }, getValues } = useForm<FormData>({ mode: 'onChange' });
    const [senhaVisivel, setSenhaVisivel] = useState<boolean>(false);

    const handleFormSubmit = (data: FormData) => {
        console.log(data);
        const headers = {
            'accept': ' */*',
            'Content-Type': ' application/json'

        }
        const dados = {
            "email": data.email,
            "password": data.senha
        }
        axios.post("https://localhost:7290/api/account/login", dados, { headers }).then((Response) => {
            console.log(Response)
            console.log("voce está logado")
            navigation.navigate('Routes')
        }
        ).catch((error) => {
            console.log(error)
            console.log("usuário e/ou senha incorretos!")
        }
        )


    };

    return (
        <ImageBackground source={require('../assets/background.png')} style={styles.background}>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.content} keyboardShouldPersistTaps="handled">
                    <View style={styles.centerContent}>
                        <View style={styles.header}>
                            <Image style={loginScreenStyles.logo} source={require('../assets/logo.png')} />
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

                            <View >
                                <ButtonComponent
                                    onPress={handleSubmit(handleFormSubmit)}
                                    mode="contained"
                                    text="Entrar"
                                />
                                <ButtonComponent
                                    onPress={handleSubmit(handleFormSubmit)}
                                    text="Esqueci minha senha"
                                    mode='text'
                                />
                            </View>
                        </View>

                    </View>
                    <View style={styles.botaoCadastro}>
                        <ButtonComponent
                            onPress={() => navigation.navigate('Cadastro')}
                            text="Cadastrar"
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
}
