import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    background: {
        flex: 1,
        justifyContent: "center",
    },

    centerContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    formulario: {
        flexDirection: 'column',
        marginTop: 30,
        width: 350,
    },

    backgroundBox: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        minWidth: 400,
        width: 'auto',
        height: "auto",
        borderRadius: 15,
        borderColor: 'gray',
        borderWidth: 1,
    },

    title: {
        fontWeight: 'bold',
        color: '#413267',
        fontSize: 18,
        marginBottom: 10,
    }

})

export default styles;