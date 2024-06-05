import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    background: {
        flex: 1,
        width: '100%',
        height: '100%'
    },

    content: {
        flex: 1,
        justifyContent: 'center',
    },

    centerContent: {
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },

    formulario: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        width: 350,
    },

    backgroundBox: {       
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',  
        height: 'auto',      
        borderRadius: 15,
        borderColor: 'gray',
        borderWidth: 1,
        marginHorizontal: 20
    },

    header: {
        position: 'absolute',
        top: 50,
        alignSelf: 'center',
        width: 'auto',
        padding: 5,
        borderRadius: 15,
    },

    headerTitle: {
        fontWeight: 'bold',
        color: '#413267',
        fontSize: 35,
        textShadowColor: 'white',
        textShadowOffset: { width: -2, height: 2 },
        textShadowRadius: 2,
    },

    title: {
        fontWeight: 'bold',
        color: '#413267',
        fontSize: 18,
        marginBottom: 10,
    },

    label: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#413267',
        marginBottom: 5,
        marginTop: 15,
    },

    text: {
        fontSize: 16,
        color: '#666',
    },

    input: {
        width: '80%',
        height: 40,
        paddingHorizontal: 10,
        marginTop: 5,
        marginBottom: 15,
        borderRadius: 5,
        backgroundColor: '#EEE',
        borderColor: '#DDD',
        borderWidth: 1,
    },

    eyeIcon: {
        marginLeft: -35,
        marginBottom: 10,
        color: "#413267",
    },

    requisitos: {
        marginTop: 4,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },

    checkLogo: {
        width: 10,
        height: 10,
    },

    buttonContainer: {
        width: '80%',
        marginBottom: 10,
        maxWidth: 400
    },
})

export default styles;