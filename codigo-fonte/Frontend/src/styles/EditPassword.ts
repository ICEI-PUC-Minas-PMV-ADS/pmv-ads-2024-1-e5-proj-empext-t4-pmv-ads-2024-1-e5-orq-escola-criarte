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
        marginTop: 30,
        flexDirection: 'column',
        width: '80%',
        maxWidth: 400,
    },

    backgroundBox: {
        backgroundColor: 'white',
        width: 'auto',
        height: 'auto',
        borderRadius: 15,
        
    }

})

export default styles;