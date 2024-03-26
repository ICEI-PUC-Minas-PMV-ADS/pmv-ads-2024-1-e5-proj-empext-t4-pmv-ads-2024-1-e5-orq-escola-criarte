import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import styles from '../styles/CadastroScreenStyles';
import InputComponent from '../components/Input';
import TermosCheckBox from '../components/Checkbox';
import ButtonComponent from '../components/Button';
import { Ionicons } from '@expo/vector-icons';

// Define a estrutura dos dados do formulário
interface FormData {
    nome: string;
    email: string;
    senha: string;
    confirmarSenha: string;
}

export default function CadastroScreen() {
    // Inicializa o hook useForm do react-hook-form
    const { control, handleSubmit, formState: { isValid }, getValues } = useForm<FormData>({ mode: 'onChange' });

    // Estados locais para controle de aceitação de termos e validação de senhas
    const [termosAceitos, setTermosAceitos] = useState<boolean>(false);
    const [senhasConferem, setSenhasConferem] = useState<boolean>(true);
    const [senhaVisivel, setSenhaVisivel] = useState<boolean>(false);

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
        // Aqui você pode enviar os dados para o servidor, por exemplo
    };

    return (
        // Estrutura da tela com fundo de imagem e conteúdo centralizado
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
                                        placeholderTextColor= '#999999'
                                        value={value}
                                        id="confirmarSenha"
                                        errorMessage={!senhasConferem && "As senhas devem ser iguais!"}
                                    />
                                )}
                                name="confirmarSenha"
                                rules={{ required: true }}
                                defaultValue=""
                            />

                            {/* Caixa de seleção para aceitar os termos */}
                            <TermosCheckBox checked={termosAceitos} onValueChange={handleTermosChange} />
                        </View>

                        {/* Botão para concluir o cadastro */}
                        <View style={styles.botao}>
                            <ButtonComponent
                                onPress={handleSubmit(handleFormSubmit)}
                                disabled={!termosAceitos || !isValid || !senhasConferem}
                                text="Concluir Cadastro"
                            />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
}
