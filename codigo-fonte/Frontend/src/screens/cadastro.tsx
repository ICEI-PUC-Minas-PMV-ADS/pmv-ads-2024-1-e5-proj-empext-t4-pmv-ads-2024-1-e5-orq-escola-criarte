import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform, ScrollView } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from '../styles/CadastroScreenStyles';
import InputComponent from '../components/Input';
import TermosCheckBox from '../components/Checkbox';
import ButtonComponent from '../components/Button';
import validaCPF from '../components/ValidarCPF';
import { insertMaskInCpf } from '../components/cpf';

export default function CadastroScreen() {
    const { control, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' });
    const [termosAceitos, setTermosAceitos] = useState<boolean>(false);
    const [senhasConferem, setSenhasConferem] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

    const handleTermosChange = (checked: boolean) => {
        setTermosAceitos(checked);
    };

    const handleSenhas = (checked: boolean) => {
        setSenhasConferem(checked);
    };

    const handleDateChange = (date: Date) => {
        setSelectedDate(date);
        setShowDatePicker(false);
    };

    const openDatePicker = () => {
        setShowDatePicker(true);
    };

    const formatarData = (data: Date) => {
        const dia = data.getDate().toString().padStart(2, '0');
        const mes = (data.getMonth() + 1).toString().padStart(2, '0');
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    };

    const handleFormSubmit = (data: any) => {
        const formData = {
            ...data,
            data: selectedDate ? formatarData(selectedDate) : ''
        };
        console.log(formData);
        // Adicione a lógica necessária para lidar com os dados do usuário após a submissão do formulário
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.titulo}>Cadastre-se</Text>
                    <Text style={styles.subTitulo}>Preencha o formulário abaixo para realizar o cadastro</Text>
                </View>

                <View style={styles.formulario}>
                    <Text style={styles.texto}>Nome Completo:</Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputComponent
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                                id="nome"
                            />
                        )}
                        name="nome"
                        rules={{ required: true }}
                        defaultValue=""
                    />

                    <Text style={styles.texto}>CPF:</Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputComponent
                                onBlur={onBlur}
                                onChange={text => onChange(insertMaskInCpf(text))}
                                value={value}
                                errorMessage={errors.cpf && "CPF inválido!"}
                                id="cpf"
                            />
                        )}
                        name="cpf"
                        rules={{ required: true, validate: value => validaCPF(value) || "CPF inválido!" }}
                        defaultValue=""
                    />

                    <Text style={styles.texto}>Data de Nascimento:</Text>
                    <TouchableOpacity onPress={openDatePicker}>
                        <InputComponent
                            editable={false}
                            value={selectedDate ? selectedDate.toLocaleDateString('pt-BR') : 'Selecione a data'}
                        />
                    </TouchableOpacity>
                    {showDatePicker && (
                        <DateTimePicker
                            value={selectedDate || new Date()}
                            mode="date"
                            display={Platform.OS === 'android' ? 'spinner' : 'default'}
                            onChange={(event, date) => {
                                if (date) {
                                    handleDateChange(date);
                                } else {
                                    setShowDatePicker(false);
                                }
                            }}
                        />
                    )}

                    <Text style={styles.texto}>Email:</Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputComponent
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                                id="email"
                            />
                        )}
                        name="email"
                    />

                    <Text style={styles.texto}>Senha:</Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputComponent
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                                id="senha"
                            />
                        )}
                        name="senha"
                        rules={{ required: true }}
                    />

                    <Text style={styles.texto}>Confirmar Senha:</Text>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <InputComponent
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                                id="confirmarSenha"
                                errorMessage={errors.confirmarSenha && "As senhas não conferem!"}
                            />
                        )}
                        name="confirmarSenha"
                        rules={{
                            required: true,
                            validate: (value) => value === document.getElementById('senha') || "As senhas não conferem!"
                        }}
                    />

                    <TermosCheckBox checked={termosAceitos} onValueChange={handleTermosChange} />
                </View>
                <View style={styles.botao}>
                    <ButtonComponent
                        onPress={handleSubmit(handleFormSubmit)}
                        disabled={!termosAceitos || !isValid}
                        text="Concluir Cadastro"
                    />
                </View>
            </View>
        </ScrollView>
    );
}
