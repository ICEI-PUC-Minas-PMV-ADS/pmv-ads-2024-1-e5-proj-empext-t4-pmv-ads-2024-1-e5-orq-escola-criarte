import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    background: {
        flex: 1,
        justifyContent: "center",
    },

    rectangle: {
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        padding: 10,
        borderRadius: 10,
        marginTop: 15,
        marginRight: 5,
        marginLeft: 5,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    },

    informaçoes: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        marginTop: 10,
    },

    label: {
        fontWeight: "bold",
        flex: 1,
    },

    content: {
        flex: 1,
    },

    monthTitle: {
        color: '#413267',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,
        borderBottomColor: '#413267',
        borderBottomWidth: 3,
        marginTop: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.80)',
        borderRadius: 15,
        textAlign: 'center',
    },

    eventDetails: {
        marginTop: 10,
    },

    eventTitle: {
        fontSize: 23,
        fontWeight: "bold",
        marginBottom: 15,
        alignSelf: "center",
    },

    eventImage: {
        width: "100%",
        height: 300,
        borderRadius: 5,
    },

    createEventButton: {
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

    createEventButtonText: {
        fontSize: 15,
        textAlign: 'center',
        color: "#FFF",
        fontWeight: 'bold',
        marginBottom: 3,
    },

    moreInfo: {
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.90)',
        textAlign: 'center',
        color: '#413267',
        fontSize: 13,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginTop: 10,
    },
    
    extraInfo: {
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.90)',
        marginTop: 10,
    },
    
    extraInfoText: {
        color: '#333',
        fontSize: 14,
        textAlign: 'center',
    },

    deleteButton: {
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
});

export default styles;