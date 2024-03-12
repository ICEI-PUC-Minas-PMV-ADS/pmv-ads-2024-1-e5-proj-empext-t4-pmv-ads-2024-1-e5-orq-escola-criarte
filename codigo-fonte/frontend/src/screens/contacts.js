import React from "react";
import { View } from "react-native";
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function Contacts () {
    const navigation = useNavigation();

    return(
        <View>
            <Button onPress={() => navigation.navigate('LoginScreen')} mode="contained">Entrar</Button>
        </View>
    )
}

export default Contacts;
