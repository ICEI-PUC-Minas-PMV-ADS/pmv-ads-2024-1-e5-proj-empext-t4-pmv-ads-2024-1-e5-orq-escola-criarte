import React from "react";
import { View, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Avatar, Card, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

function Contacts() {
    const navigation = useNavigation();

    return (
        <ImageBackground source={require('../assets/background.png')} style={styles.background}>
            <View style={{ position: 'top', margin: 10 }}>

                <View >
                    <Card>
                        <Card.Title
                            title="Horário de Atendimento"
                            subtitle=""
                            left={(props) => <Avatar.Icon {...props} icon="clock-outline" />}
                            right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                        />
                    </Card>

                </View>
                <View>
                    <Card>
                        <Card.Title
                            title="Card Title"
                            subtitle="Card Subtitle"
                            left={(props) => <Avatar.Icon {...props} icon="folder" />}
                            right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                        />
                    </Card>

                </View>
                <View>
                    <Card>
                        <Card.Title
                            title="Card Title"
                            subtitle="Card Subtitle"
                            left={(props) => <Avatar.Icon {...props} icon="folder" />}
                            right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                        />
                    </Card>

                </View>
                <View>
                    <Card>
                        <Card.Title
                            title="Card Title"
                            subtitle="Card Subtitle"
                            left={(props) => <Avatar.Icon {...props} icon="folder" />}
                            right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
                        />
                    </Card>

                </View>

            </View>
        </ImageBackground>
    )
}

export default Contacts;
