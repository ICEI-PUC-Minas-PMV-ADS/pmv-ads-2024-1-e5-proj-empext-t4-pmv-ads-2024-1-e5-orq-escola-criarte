import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    background: {
        flex: 1,
        justifyContent: "center",
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },

    rectangle: {
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: 10,
        marginTop: 15,
        marginRight: 5,
        marginLeft: 5,
    },

    text1: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    row1: {
        marginTop: 10,
        paddingTop: 5,
        borderTopWidth: 1,
        flexDirection: "column",
        justifyContent: "center",
    },

    row2: {
        paddingBottom: 5,
        borderBottomWidth: 1,
        flexDirection: "column",
        justifyContent: "center",
    },

    row3: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    row4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },

    informaçoes1: {
        paddingLeft: 20,
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },

    informaçoes2: {
        paddingLeft: 20,
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },

    joinButton: {
        backgroundColor: 'rgba(103,80,164,1)',
        flex: 1,
        borderRadius: 5,
        paddingVertical: 5,
        marginHorizontal: 5,
        alignItems: 'center',
    },

    joinButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },

    label: {
        fontSize: 14,
        flex: 1,
    },

    content: {
        flex: 1,
    },

    monthTitle: {
        color: '#413267',
        fontSize: 30,
        fontWeight: 'bold',
        borderBottomColor: '#413267',
        borderBottomWidth: 3,
        marginTop: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.80)',
        textAlign: 'center',
    },

    eventDetails: {
        marginTop: 10,
    },

    eventTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        alignSelf: "center",
    },

    eventImage: {
        marginLeft: 10,
        marginRight: 10,
        height: 350,
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
        fontSize: 14,
        textAlign: 'center',
        color: "#FFF",
        fontWeight: 'bold',
        marginBottom: 3,
    },

    moreInfo: {
        padding: 10,
        textAlign: 'center',
        color: '#413267',
        fontSize: 14,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginTop: 10,
    },

    extraInfo: {
        padding: 10,
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