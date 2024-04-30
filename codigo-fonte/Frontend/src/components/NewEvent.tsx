import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Pressable, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { api } from '../config/authUtils';
import styles from '../styles/ModalCreateEvent';
import { getToken } from '../config/authUtils';
import { jwtDecode } from 'jwt-decode';

interface Props {
    visible: boolean;
    onClose: () => void;
}

interface UserData {
    'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name': string;
}

export default function CreateEventModal({ visible, onClose }: Props) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [county, setCounty] = useState('');
    const [image, setImage] = useState<{ uri: string }>({ uri: '' });
    const [username, setUsername] = React.useState<string>('');

    React.useEffect(() => {
        async function fetchUserData() {
            try {
                const token = await getToken();
                if (token) {
                    const decoded = jwtDecode<UserData>(token);
                    setUsername(decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']);
                } else {
                    console.log('Token é nulo');
                }
            } catch (error) {
                console.error("Erro ao obter os dados do usuário:", error);
            }
        };

        fetchUserData();
    }, []);

    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const { uri } = result.assets[0];
            setImage({ uri });
        }
    };

    const handleSubmit = async () => {
        const event = {
            content: {
                title,
                body,
            },
            imageURL: image.uri,
            date: new Date().toISOString(),
            address: {
                street,
                number,
                county,
            },
            username: username,
        };

        console.log('Enviando o seguinte objeto para a API:', event);

        try {
            const response = await api.post('/posts', event);
            if (response.status === 200) {

                console.log('Evento criado com sucesso');

                setTitle('');
                setBody('');
                setStreet('');
                setNumber('');
                setCounty('');
                setImage({ uri: '' });
            } else {
                throw new Error('Falha na criação do evento');
            }
            onClose();
        } catch (error: any) {
            console.error('Error:', error.message);
        }
    };

    const handleCancel = () => {
        setTitle('');
        setBody('');
        setStreet('');
        setNumber('');
        setCounty('');
        setImage({ uri: '' });

        onClose();
    };

    return (
        <Modal visible={visible} onRequestClose={onClose} transparent>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    {image.uri ? <Image source={image} style={styles.imagePreview} /> : null}
                    <Text style={styles.title}>Criar Evento</Text>
                    <TextInput style={styles.input} placeholder="Título" value={title} onChangeText={setTitle} />
                    <TextInput style={styles.descriptionInput} placeholder="Descrição" value={body} onChangeText={setBody} multiline />
                    <TextInput style={styles.input} placeholder="Rua" value={street} onChangeText={setStreet} />
                    <TextInput style={styles.input} placeholder="Número" value={number} onChangeText={setNumber} />
                    <TextInput style={styles.input} placeholder="Condado" value={county} onChangeText={setCounty} />
                    <Pressable style={styles.button} onPress={selectImage}>
                        <Text style={styles.buttonText}>Selecionar Imagem</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Criar</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={handleCancel}>
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}
