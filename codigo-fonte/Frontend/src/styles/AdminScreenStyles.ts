import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
    },

    conteiner: {
        flex: 1,
    },

    header: {
        width: "100%",
        height: 85,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    hederText: {
        marginTop: 25,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#413267',
        fontSize: 25,
    },

    subHeader: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 25,
        fontSize: 20,
        textAlign: 'center',
        color: '#413267',
        textShadowColor: 'white',
        textShadowOffset: { width: -2, height: 2 },
        textShadowRadius: 3, 
      },

    pickerContainer: {
        alignSelf: 'center',
        height: 50,
        width: '85%',
        backgroundColor: 'rgba(255,255,255, 0.85)',
        borderWidth: 1,
        borderColor: '#413267',
        borderRadius: 10,
        marginBottom: 15,
    },

    pickers: {
        textAlignVertical: 'center'
    },

    row1: {
        alignSelf: 'center',
        width: '95%',
        borderRadius: 15,
        backgroundColor: 'rgba(255,255,255, 0.85)',
    },

    personItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginHorizontal: 20,
    },

    personName: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    personEmail: {
        fontSize: 14,
        color: '#555',
    },

    personType: {
        fontSize: 14,
        color: '#888',
    },

    errorText: {
        color: 'red',
        marginTop: 20,
        textAlign: 'center',
    },

    peopleCount: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
    },

});

export default styles;
