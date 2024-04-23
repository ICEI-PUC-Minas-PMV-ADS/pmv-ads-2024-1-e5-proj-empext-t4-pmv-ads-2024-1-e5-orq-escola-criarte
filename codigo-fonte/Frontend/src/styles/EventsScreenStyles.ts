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
});

export default styles;