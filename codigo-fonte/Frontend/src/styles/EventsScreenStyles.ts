import { Platform, StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    rectangle: {
        backgroundColor: "lightgray",
        padding: 10,
        borderRadius: 10,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    },

    label: {
        fontWeight: "bold",
        flex: 1,
    },

    content: {
        flex: 1,
    },

    eventDetails: {
        marginTop: 10,
    },

    eventTitle: {
        fontWeight: "bold",
        marginBottom: 5,
    },

    eventImage: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
        borderRadius: 5,
    },

    createEventButton: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:70,
        height:70,
        backgroundColor: '#413267',
        borderRadius:50,
        position: 'absolute',
        bottom: 10,
        right: 10,
    },

    createEventButtonText: {
        fontSize: 15,
        textAlign: 'center',
        color: "#FFF",
        fontWeight: 'bold',
        marginBottom: 3,
    },
});

export default styles;