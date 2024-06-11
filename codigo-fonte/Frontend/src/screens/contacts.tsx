import React from "react";
import { View, ImageBackground, Text, Linking, ScrollView, Image } from "react-native";
import { List, Avatar } from 'react-native-paper';
import styles from '../styles/ContactsScreenStyles'
import * as Clipboard from 'expo-clipboard'

const Contacts: React.FC = () => {

    const pixImageSource = require('../assets/pix.png');

    const [copiedPixKey, setCopiedPixKey] = React.useState(false);

    const copyPixKeyToClipboard = async () => {
        const pixKey = "05.705.962/0001-60"; // Replace with your actual Pix key
        await Clipboard.setString(pixKey);
        setCopiedPixKey(true);
    }
    return (
        <ImageBackground resizeMode="cover" source={require('../assets/background.jpg')} style={styles.background}>
            <ScrollView>
                <View style={styles.container}>
                    <List.Section>
                        <List.Item style={styles.listItem} titleStyle={styles.listItemTitle}
                            title="Ajude o projeto. Doe!"
                            description={copiedPixKey ? "Chave Pix: 05.705.962/0001-60" : "Chave Pix: 05.705.962/0001-60"}
                            left={() => <Image source={pixImageSource} style={styles.piximage} />}
                            onPress={copyPixKeyToClipboard}
                        />
                        <List.Item style={[styles.listItem, styles.listItemLarge]} titleStyle={styles.listItemTitle}
                            title="Horário de Atendimento"
                            description={() =>
                                <View style={styles.horarios}>
                                    <View><Text style={{ marginBottom: 5 }}><Text style={{ fontWeight: 'bold', color: '#413267' }}>Quarta e Quinta:</Text> 09h às 17h, 14h às 20h</Text>
                                    </View>
                                    <View><Text style={{ marginBottom: 5 }}><Text style={{ fontWeight: 'bold', color: '#413267' }}>Sexta:</Text> 09h às 11h, 14h às 16h</Text>
                                    </View>
                                    <View><Text style={{ marginBottom: 5 }}><Text style={{ fontWeight: 'bold', color: '#413267' }}>Sábado:</Text> 08h30 às 12h</Text>
                                    </View>
                                </View>
                            }
                            left={() => <Avatar.Icon size={75} icon="clock-outline" color="#413267" style={{ marginLeft: 10, backgroundColor: 'transparent' }} />}
                        />
                        <List.Item style={styles.listItem} titleStyle={styles.listItemTitle}
                            title="Endereço da Sede"
                            description={
                                "Rua Edimburgo, 102 - Europa \n" +
                                "CEP 31620-530"
                            }
                            left={() => <Avatar.Icon size={75} icon="google-maps" color="#413267" style={{ marginLeft: 10, backgroundColor: 'transparent' }} />}
                            onPress={() => Linking.openURL('https://maps.app.goo.gl/K74dzfSDNhNNcAeq8')}
                        />
                        <List.Item style={styles.listItem} titleStyle={styles.listItemTitle}
                            title="Email"
                            description="orquestracriarte@hotmail.com"
                            left={() => <Avatar.Icon size={75} icon="email" color="#413267" style={{ marginLeft: 10, backgroundColor: 'transparent' }} />}
                            onPress={() => Linking.openURL('mailto:orquestracriarte@hotmail.com')}
                        />
                        <List.Item style={styles.listItem} titleStyle={styles.listItemTitle}
                            title="Whatsapp"
                            description="(31) 3458-8718"
                            left={() => <Avatar.Icon size={75} icon="whatsapp" color="#413267" style={{ marginLeft: 10, backgroundColor: 'transparent' }} />}
                            onPress={() => Linking.openURL('https://wa.me/553134588718')}
                        />
                        <List.Item style={styles.listItem} titleStyle={styles.listItemTitle}
                            title="Instagram"
                            description="@orquestracriarteoficial"
                            left={() => <Avatar.Icon size={75} icon="instagram" color="#413267" style={{ marginLeft: 10, backgroundColor: 'transparent' }} />}
                            onPress={() => Linking.openURL('https://www.instagram.com/orquestracriarteoficial')}
                        />
                        <List.Item style={styles.listItem} titleStyle={styles.listItemTitle}
                            title="Site"
                            description="orquestraescolacriarte.com.br"
                            left={() => <Avatar.Icon size={75} icon="web" color="#413267" style={{ marginLeft: 10, backgroundColor: 'transparent' }} />}
                            onPress={() => Linking.openURL('https://orquestraescolacriarte.com.br/')}
                        />
                    </List.Section>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default Contacts;
