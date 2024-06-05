import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    background: {
        flex: 1,
        justifyContent: "center",
    },

    container: {
        padding: 10,
    },

    rectangle: {
        margin: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.80)',
        borderRadius: 10,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },

    label: {
        fontSize: 16,
        fontWeight: "bold",
    },

    content: {
        fontSize: 14,
    },

    eventDetails: {
        flexDirection: "row",
        alignItems: "center",
    },

    eventTitle: {
        fontSize: 18,
        fontWeight: "bold",
        flex: 1,
    },

    eventImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 10,
    },

    image: {
        width: 'auto',
        height:'auto',
        resizeMode:'contain',
        borderRadius: 10,
    },

    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 3
    },

    body: {
        fontSize: 14,
        padding: 10,
        backgroundColor: 'rgba(80, 80, 80, 0.25)'
    },

    border: {
        borderBottomWidth: 1,
    },

    info: {
        fontSize: 14,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#413267',
        marginTop: 8,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },

    createNewsButton: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        backgroundColor: '#413267',
        borderRadius: 50,
        position: 'absolute',
        bottom: 10,
        right: 10,
        zIndex: 1,
    },

    createNewsButtonText: {
        fontSize: 15,
        textAlign: 'center',
        color: "#FFF",
        fontWeight: 'bold',
        marginBottom: 3,
    },

    deleteButton: {
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default styles;