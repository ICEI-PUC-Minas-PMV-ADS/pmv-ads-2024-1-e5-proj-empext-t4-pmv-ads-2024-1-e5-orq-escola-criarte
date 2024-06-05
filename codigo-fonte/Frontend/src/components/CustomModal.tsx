import React, { useState } from 'react';
import { Modal, Text, View, Pressable, StyleSheet } from 'react-native';

interface CustomModalProps {
  message: string;
  onOk: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ message, onOk }) => {
  const [modalVisible, setModalVisible] = useState(true);

  const handleOk = () => {
    setModalVisible(false);
    onOk();
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{message}</Text>
            <Pressable style={styles.botao} onPress={handleOk}>
              <Text style={styles.buttonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  botao: {
    backgroundColor: '#413267',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 45,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    elevation: 5
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: 'bold',
    fontSize: 15,
  }

});

export default CustomModal;
