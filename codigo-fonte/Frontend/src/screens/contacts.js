import React from "react";
import { View, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';
import loginScreenStyles from '../styles/LoginScreenStyles';
import { Avatar, Card, IconButton  } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

function Contacts () {
    const navigation = useNavigation();

    return(
        <ImageBackground source={require('../assets/background.png')} style={loginScreenStyles.background}>
            <View style={{ position: 'top', margin: 10}}>
                <Card>
                    <View >
                        <Card.Title
                            title="Card Title"
                            subtitle="Card Subtitle"
                            left={(props) => <Avatar.Icon {...props} icon="folder" />}
                            right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
                        />
                        <Card.Title
                            title="Card Title"
                            subtitle="Card Subtitle"
                            left={(props) => <Avatar.Icon {...props} icon="folder" />}
                            right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
                        />
                        <Card.Title
                            title="Card Title"
                            subtitle="Card Subtitle"
                            left={(props) => <Avatar.Icon {...props} icon="folder" />}
                            right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
                        />
                        <Card.Title
                            title="Card Title"
                            subtitle="Card Subtitle"
                            left={(props) => <Avatar.Icon {...props} icon="folder" />}
                            right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
                        />
                    </View>
                </Card>
                </View>
        </ImageBackground>
    )
}

export default Contacts;
