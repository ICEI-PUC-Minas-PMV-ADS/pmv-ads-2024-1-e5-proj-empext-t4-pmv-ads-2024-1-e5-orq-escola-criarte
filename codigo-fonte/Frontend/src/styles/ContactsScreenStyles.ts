import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    background: {
        flex: 1,
        justifyContent: "center",
    },

    container: {
        margin: 10
    },

    listItem: {
        backgroundColor: 'rgba(255,255,255,0.85)',
        borderRadius: 10,
        marginBottom: 15,
        boxShadow: "0px 2px 3.84px rgba(0, 0, 0, 0.25)",
        elevation: 5,
    },
    

    listItemLarge: {
        height: 120,
    },

    listItemTitle: {
        color: '#413267',
        fontWeight: 'bold',
        marginBottom: 5,
    },

    horarios: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
});

export default styles;