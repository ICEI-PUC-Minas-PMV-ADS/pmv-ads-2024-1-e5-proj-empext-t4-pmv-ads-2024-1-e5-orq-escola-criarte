import React from "react";
import { View, ImageBackground, Text, Linking, ScrollView } from "react-native";
import { List, Avatar } from 'react-native-paper';
import styles from '../styles/ContactsScreenStyles'

const Contacts: React.FC = () => {
    return (
        <ImageBackground resizeMode="cover" source={require('../assets/background.png')} style={styles.background}>
            <ScrollView>
            <View style={styles.container}>
                    <List.Section>
                        <List.Item style={[styles.listItem, styles.listItemLarge]} titleStyle={styles.listItemTitle}
                            title="Horário de Atendimento"
                            description={() =>
                                <View>
                                    <View style={styles.horarios}>
                                        <Text style={{ marginBottom: 5 }}><Text style={{ fontWeight: 'bold', color: '#413267' }}>Quarta e Quinta:</Text> 09h às 17h, 14h às 20h</Text>
                                        <Text style={{ marginBottom: 5 }}><Text style={{ fontWeight: 'bold', color: '#413267' }}>Sexta:</Text> 09h às 11h, 14h às 16h</Text>
                                    </View>
                                    <Text><Text style={{ fontWeight: 'bold', color: '#413267' }}>Sábado:</Text> 08h30 às 12h</Text>
                                </View>
                            }
                            left={() => <Avatar.Icon size={75} icon="clock-outline" color="#413267" style={{ marginLeft: 10, backgroundColor: 'transparent' }} />}
                        />
                        <List.Item style={styles.listItem} titleStyle={styles.listItemTitle}
                            title="Endereço da Sede"
                            description={
                                "Rua Dresde, 50 - Europa \n" +
                                "CEP 31620-170"
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
                    </List.Section>
            </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default Contacts;
