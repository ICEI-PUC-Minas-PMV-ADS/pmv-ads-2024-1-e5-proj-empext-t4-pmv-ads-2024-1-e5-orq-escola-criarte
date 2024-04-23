import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },

    container: {
        margin: 10
    },

    listItem: {
        backgroundColor: 'rgba(255,255,255,0.85)',
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    listItemLarge: {
        height: 120,
    },

    listItemTitle: {
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 5,
    },

    horarios: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
});

export default styles;