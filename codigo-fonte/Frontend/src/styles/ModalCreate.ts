import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    backdrop: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },

    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginBottom: 10,
        borderRadius: 6,
    },

    descriptionInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginBottom: 10,
        borderRadius: 6,
        height: 100,
    },

    button: {
        backgroundColor: '#413267',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
    },

    buttonDisabled: {
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },

    buttonText: {
        color: 'white',
        textAlign: 'center',
    },

    imagePreview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
});

export default styles;
