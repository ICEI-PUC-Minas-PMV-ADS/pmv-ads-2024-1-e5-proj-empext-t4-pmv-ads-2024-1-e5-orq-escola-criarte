import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import styles from '../styles/EventsScreenStyles';
import globaStyles from '../styles/LoginScreenStyles';

function Events() {
    return (
        <ImageBackground source={require('../assets/background.png')} style={globaStyles.background}>
            <View style={styles.rectangle}>
                <View style={styles.row}>
                    <Text style={styles.label}>DIA</Text>
                    <Text style={styles.label}>LOCAL</Text>
                    <Text style={styles.label}>HORA</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.content}>26/02</Text>
                    <Text style={styles.content}>AV.BRASIL</Text>
                    <Text style={styles.content}>14H</Text>
                </View>
                <View style={styles.eventDetails}>
                    <Text style={styles.eventTitle}>APRESENTAÇÃO CORAL</Text>
                    <Image
                        source={require('../assets/avatar.png')}
                        style={styles.eventImage}
                    />
                </View>
            </View>
        </ImageBackground>
    );
}

export default Events;
