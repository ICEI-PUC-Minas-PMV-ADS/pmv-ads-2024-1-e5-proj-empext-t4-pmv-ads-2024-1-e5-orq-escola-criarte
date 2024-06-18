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
        height: 'auto',
    },

    listItemTitle: {
        color: '#413267',
        fontWeight: 'bold',
        marginBottom: 5,
    },

    horarios: {
        flexDirection: 'column', 
        justifyContent: 'space-between',
        marginLeft: 5,
    },

    piximage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 20,
        marginRight: 20
      },
});

export default styles;