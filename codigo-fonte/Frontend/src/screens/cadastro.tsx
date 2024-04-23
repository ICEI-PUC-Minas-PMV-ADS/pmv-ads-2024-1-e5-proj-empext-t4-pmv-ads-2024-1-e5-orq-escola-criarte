import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground, Modal } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import styles from '../styles/CadastroScreenStyles';
import InputComponent from '../components/Input';
import TermosCheckBox from '../components/Checkbox';
import ButtonComponent from '../components/Button';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import Title from '../components/Title';
import ImageCheck from '../assets/icon-check.png'
import ImageClose from '../assets/icon-close.png'
interface FormData {
    nome: string;
    email: string;
    senha: string;
    confirmarSenha: string;
}

interface Props {
    navigation: any;
}


export default function CadastroScreen({ navigation }: Props) {
    // Inicializa o hook useForm do react-hook-form
    const { control, handleSubmit, formState: { isValid }, getValues, reset } = useForm<FormData>({ mode: 'onChange' });

    // Estados locais para controle de aceitação de termos e validação de senhas
    const [termosAceitos, setTermosAceitos] = useState<boolean>(false);
    const [senhasConferem, setSenhasConferem] = useState<boolean>(true);
    const [senhaVisivel, setSenhaVisivel] = useState<boolean>(false);
    const [cadastroRealizado, setCadastroRealizado] = useState<boolean>(false);
    const [validateInput, setValidateInput] = useState({
        case: false,
        number: false,
        length: false,
        special: false,
    })

    // Função para lidar com a mudança na aceitação dos termos
    const handleTermosChange = (checked: boolean) => {
        setTermosAceitos(checked);
    };

    // Função para lidar com a mudança na confirmação da senha
    const handleConfirmarSenhaChange = () => {
        const values = getValues();
        setSenhasConferem(values.senha === values.confirmarSenha);
    };

    // Função para lidar com o envio do formulário
    const handleFormSubmit = (data: FormData) => {
        console.log(data);
        const headers = {
            'accept': ' */*',
            'Content-Type': ' application/json'

        }
        const dados = {
            "name": data.nome,
            "password": data.senha,
            "email": data.email,
            "role": 1
        }
        axios.post("https://localhost:7290/api/users", dados, { headers })
            .then((response) => {
                console.log(response);
                setCadastroRealizado(true);
                reset(); // Limpa o formulário após o cadastro
                navigation.navigate('Login')
            })
            .catch((error) => {
                console.log(error);
                console.log("Erro ao cadastrar")
            });

    };

    // Função para fechar o pop-up de cadastro realizado
    const handleClosePopup = () => {
        setCadastroRealizado(false);
    };

    const secureText = (password: string) => {
        const regexUppercase = RegExp(/^(?=.*[A-Z]).+$/)
        const regexSpecial = RegExp(/^(?=.*\W).+$/)
        const regexNumber = RegExp (/^(?=.*[0-9]).+$/)
        const length = password.length >= 8
    
        setValidateInput({
            case: regexUppercase.test(password),
            number: regexNumber.test(password),
            special: regexSpecial.test(password),
            length
        })
    }


    return (

        <ImageBackground source={require('../assets/background.png')} style={styles.background}>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.content}>
                    <View style={styles.centerContent}>
                        {/* Cabeçalho da tela */}
                        <View style={styles.header}>
                            <Text style={styles.titulo}>Cadastre-se</Text>
                        </View>

                        {/* Formulário de cadastro */}
                        <View style={styles.formulario}>

                            {/* Campo Nome Completo */}
                            <Text style={styles.texto}>Nome Completo:</Text>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputComponent
                                        onBlur={onBlur}
                                        onChange={onChange}
                                        placeholder='Digite seu Nome Completo'
                                        value={value}
                                        id="nome"
                                    />
                                )}
                                name="nome"
                                rules={{ required: true }}
                                defaultValue=""
                            />

                            {/* Campo Email */}
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

                            {/* Campo Senha */}
                            <Text style={styles.texto}>Senha:</Text>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <InputComponent
                                            secureTextEntry={!senhaVisivel}
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            onChangeText={(password) => {
                                                secureText(password)
                                            }}
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

                            {/* Campo Confirmar Senha */}
                            <Text style={styles.texto}>Confirmar Senha:</Text>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputComponent
                                        secureTextEntry={!senhaVisivel}
                                        onBlur={() => {
                                            onBlur();
                                            handleConfirmarSenhaChange();
                                        }}
                                        onChange={onChange}
                                        placeholder='**********'
                                        placeholderTextColor='#999999'
                                        value={value}
                                        id="confirmarSenha"
                                        errorMessage={!senhasConferem && "As senhas devem ser iguais!"}
                                    />
                                )}
                                name="confirmarSenha"
                                rules={{ required: true }}
                                defaultValue=""
                            />

                            <View>
                                <Title title='Sua senha deve ter:' />

                                <View style={styles.requisitos}>
                                    <Image style={styles.checkLogo} source={validateInput.length ? ImageCheck : ImageClose} />
                                    <Text style={styles.text}> 8 Caracteres</Text>
                                </View>
                                <View style={styles.requisitos}>
                                    <Image style={styles.checkLogo} source={validateInput.number ? ImageCheck : ImageClose} />
                                    <Text style={styles.text}> Pelo menos um número</Text>
                                </View>
                                <View style={styles.requisitos}>
                                    <Image style={styles.checkLogo} source={validateInput.special ? ImageCheck : ImageClose} />
                                    <Text style={styles.text}> Pelo menos um caractere especial</Text>
                                </View>
                                <View style={styles.requisitos}>
                                    <Image style={styles.checkLogo} source={validateInput.case ? ImageCheck : ImageClose} />
                                    <Text style={styles.text}> Pelo menos uma letra maiúscula</Text>
                                </View>

                            </View>

                            {/* Caixa de seleção para aceitar os termos */}
                            <TermosCheckBox style={styles.checkbox} checked={termosAceitos} onValueChange={handleTermosChange} />
                        </View>

                        {/* Botão para concluir o cadastro */}
                        <View style={styles.botao}>
                            <ButtonComponent
                                onPress={handleSubmit(handleFormSubmit)}
                                disabled={!termosAceitos || !isValid || !senhasConferem || !validateInput.case || !validateInput.length || !validateInput.number || !validateInput.special}
                                text="Concluir Cadastro"
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={cadastroRealizado}
                onRequestClose={handleClosePopup}>
                <View style={styles.popupContainer}>
                    <View style={styles.popupContent}>
                        <Text style={styles.popupTitle}>Cadastro Realizado</Text>
                        <Text style={styles.popupMessage}>Seu cadastro foi realizado com sucesso!</Text>
                        <ButtonComponent text="Fechar" onPress={handleClosePopup} />
                    </View>
                </View>
            </Modal>

        </ImageBackground>
    );
}
