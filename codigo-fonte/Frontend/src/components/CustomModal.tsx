import React, { useState } from 'react';
import { Modal, Text, View, Button, StyleSheet } from 'react-native';

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

            <Button
              color={'#413267'}
              title="OK"
              onPress={handleOk}
            />
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
