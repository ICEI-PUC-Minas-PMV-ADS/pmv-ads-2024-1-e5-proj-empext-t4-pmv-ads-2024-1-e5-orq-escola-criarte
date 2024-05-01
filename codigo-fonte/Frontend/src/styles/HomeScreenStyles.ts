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
        padding: 10,
        backgroundColor: "#fff",
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
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },

    body: {
        fontSize: 16,
        marginTop: 10,
    },
})

export default styles;