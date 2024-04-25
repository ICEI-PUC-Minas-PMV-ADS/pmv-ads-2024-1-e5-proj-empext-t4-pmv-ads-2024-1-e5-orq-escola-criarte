import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Pressable, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { api } from '../config/authUtils';
import styles from '../styles/ModalCreateEvent';

interface Props {
    visible: boolean;
    onClose: () => void;
}

export default function CreateEventModal({ visible, onClose }: Props) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState<{ uri: string }>({ uri: '' });
    const [date, setDate] = useState('');

    const handleDateChange = (newDate: string) => {
        if (/^[0-9/]*$/.test(newDate)) {
            if (newDate.length === 2 || newDate.length === 5) {
                newDate += '/';
            }
            setDate(newDate);
        }
    };

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
        try {
            await api.post('/events', {
                title,
                body,
                date,
                address,
                image
            });
            onClose();
        } catch (error) {
            console.error(error);
        }
    };

    const handleCancel = () => {
        setTitle('');
        setBody('');
        setAddress('');
        setImage({ uri: '' });
        setDate('');

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
                    <TextInput style={styles.input} placeholder="Data (dd/mm/aaaa)" value={date} onChangeText={handleDateChange} maxLength={10} />
                    <TextInput style={styles.input} placeholder="Endereço" value={address} onChangeText={setAddress} />
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
