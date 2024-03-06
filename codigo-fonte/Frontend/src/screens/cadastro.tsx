import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/CadastroScreenStyles';
import InputComponent from '../components/Input';
import TermosCheckBox from '../components/Checkbox';
import ButtonComponent from '../components/Button';
import { validaCPF } from '../components/ValidarCPF';

export default function CadastroScreen() {
    const [termosAceitos, setTermosAceitos] = useState<boolean>(false);

    const handleFormSubmit = (data: any) => {
        const cpf = data.cpfInput; // Assumindo que o valor do CPF está no campo "cpfInput"
        const isValidCPF = validaCPF(cpf);

        if (isValidCPF) {
            // Enviar dados para o servidor
        } else {
            // Exibir mensagem de erro de CPF inválido
        }
    };

    const handleTermosChange = (checked: boolean) => {
        setTermosAceitos(checked);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Cadastre-se</Text>
                <Text style={styles.subTitulo}>Preencha o formulário abaixo para realizar o cadastro</Text>
            </View>

            <View style={styles.formulario}>

                <Text style={styles.texto}>Nome Completo:</Text>
                <InputComponent
                    id="nome"
                    required
                />

                <Text style={styles.texto}>CPF:</Text>
                <InputComponent
                    name="cpf"
                    label="CPF"
                    type="text"
                    errorMessage="CPF inválido!"
                    required
                    validate={validaCPF}
                    mask="###.###.###-##"
                />

                <Text style={styles.texto}>Data de Nascimento:</Text>
                <InputComponent />

                <Text style={styles.texto}>Email:</Text>
                <InputComponent id="email"/>

                <Text style={styles.texto}>Senha:</Text>
                <InputComponent secureTextEntry />

                <Text style={styles.texto}>Confirmar Senha:</Text>
                <InputComponent secureTextEntry />

                <TermosCheckBox checked={termosAceitos} onValueChange={handleTermosChange} />

            </View>
            <View style={styles.botao}>
                <ButtonComponent onPress={() => console.log('Cadastro Concluido')} text="Concluir Cadastro" />
            </View>
        </View>
    );
}
