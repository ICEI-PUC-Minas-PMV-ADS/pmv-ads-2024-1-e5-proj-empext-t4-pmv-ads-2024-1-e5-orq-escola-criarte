import React, { useState } from 'react';
import { Modal, Text, View, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native';

const TermosModal = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <View>
            <TouchableOpacity style={styles.transparentButton} onPress={handleOpenModal}>
                <Text style={styles.transparentButtonText}>Termos de Serviço</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <ScrollView contentContainerStyle={styles.scrollViewContent}>
                            <Text style={styles.title}>1. Aceitação dos Termos</Text>
                            <Text style={styles.description}>Ao acessar e usar este aplicativo, você aceita e concorda em estar vinculado por estes Termos de Serviço. Se você não concordar com algum destes termos, você está proibido de usar ou acessar este aplicativo.</Text>
                            <Text style={styles.title}>2. Licença de Uso</Text>
                            <Text style={styles.description}>É concedida permissão para baixar temporariamente uma cópia dos materiais no aplicativo para uso pessoal e não comercial.</Text>
                            <Text style={styles.title}>3. Política de Privacidade</Text>
                            <Text style={styles.description}>Seu uso do aplicativo está sujeito à Política de Privacidade do aplicativo, que também rege o aplicativo e informa aos usuários de nossas práticas de coleta de dados.</Text>
                            <Text style={styles.title}>4. Atualizações</Text>
                            <Text style={styles.description}>Estes Termos de Serviço podem ser alterados de tempos em tempos. As revisões serão efetivas no momento da publicação no aplicativo.</Text>
                            <Text style={styles.title}>5. Contato</Text>
                            <Text style={styles.description}>Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco.</Text>
                            <Text style={styles.description}>Ao usar este aplicativo, você reconhece que leu e concordou com os termos acima.</Text>
                        </ScrollView>
                        <Button color={'#413267'} title="Fechar" onPress={handleCloseModal} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        maxHeight: '80%',
    },
    scrollViewContent: {
        paddingVertical: 20,
    },
    title: {
        color: '#413267',
        fontSize: 16,
        fontWeight: 'bold',
    },
    description: {
        marginBottom: 10,
    },
    transparentButton: {
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    transparentButtonText: {
        color: '#413267',
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});

export default TermosModal;
