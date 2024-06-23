import React, { useState } from 'react';
import { Modal, Text, View, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native';

const TermosModal = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <View>
            <TouchableOpacity style={styles.transparentButton} onPress={handleOpenModal}>
                <Text style={styles.transparentButtonText}>Politica de Privacidade</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <ScrollView contentContainerStyle={styles.scrollViewContent}>
                            <Text style={styles.title}>Política de Privacidade</Text>
                            <Text style={styles.description}>
                                Esta política de privacidade se aplica ao aplicativo OEC Informes (doravante
                                denominado “Aplicativo”) para dispositivos móveis que foi criado pela
                                S2START (doravante denominada “Provedora de Serviços”) como um serviço
                                Gratuito. Este serviço destina-se a ser utilizado "COMO ESTÁ".
                            </Text>

                            <Text style={styles.title}>1. Coleta e uso de informações</Text>
                            <Text style={styles.description}>
                                O Aplicativo coleta informações quando você baixa e usa. Essas
                                informações podem incluir informações como
                            </Text>
                            <Text style={styles.description}>
                                - O endereço de protocolo da Internet do seu dispositivo (por
                                exemplo, endereço IP)
                            </Text>
                            <Text style={styles.description}>
                                - As páginas do Aplicativo que você visita, a hora e a data da sua
                                visita, o tempo gasto nessas páginas
                            </Text>
                            <Text style={styles.description}>
                                - O tempo gasto no aplicativo
                            </Text>
                            <Text style={styles.description}>
                                - O sistema operacional que você usa no seu dispositivo móvel
                            </Text>

                            <Text style={styles.description}>
                                O Aplicativo não coleta informações precisas sobre a localização do
                                seu dispositivo móvel.
                            </Text>
                            <Text style={styles.description}>
                                O Provedor de Serviços poderá usar as informações que você forneceu
                                para entrar em contato com você de tempos em tempos para fornecer
                                informações importantes, avisos necessários e promoções de marketing.
                            </Text>
                            <Text style={styles.description}>
                                Para uma melhor experiência, ao usar o Aplicativo, o Provedor de
                                Serviços pode exigir que você nos forneça certas informações de
                                identificação pessoal, incluindo, entre outras, nome, endereços e
                                imagens. As informações solicitadas pelo Provedor de Serviços serão
                                retididas por ele e utilizadas conforme descrito nesta política de
                                privacidade.
                            </Text>

                            <Text style={styles.title}>2. Acesso de terceiros</Text>
                            <Text style={styles.description}>
                                Apenas dados agregados e anonimizados são transmitidos periodicamente a
                                serviços externos para ajudar o Provedor de Serviços a melhorar o
                                Aplicativo e seu serviço. O Provedor de Serviços pode compartilhar suas
                                informações com terceiros nas formas descritas nesta declaração de
                                privacidade.
                            </Text>
                            <Text style={styles.description}>
                                Observe que o Aplicativo utiliza serviços de terceiros que possuem
                                sua própria Política de Privacidade sobre o tratamento de dados. Abaixo
                                estão os links para a Política de Privacidade dos prestadores de
                                serviços terceirizados utilizados pelo Aplicativo:
                            </Text>
                            <Text style={styles.description}>
                                - Serviços do Google Play
                            </Text>
                            <Text style={styles.description}>
                                O Provedor de Serviços pode divulgar Informações Fornecidas pelo
                                Usuário e Coletadas Automaticamente:
                            </Text>
                            <Text style={styles.description}>
                                - conforme exigido por lei, como para cumprir uma intimação ou
                                processo legal semelhante;
                            </Text>
                            <Text style={styles.description}>
                                - quando acreditam de boa fé que a divulgação é necessária para
                                proteger os seus direitos, proteger a sua segurança ou a
                                segurança de outros, investigar fraudes ou responder a um pedido
                                governamental;
                            </Text>
                            <Text style={styles.description}>
                                - com seus provedores de serviços confiáveis ​​que trabalham em seu
                                nome, não fazem uso independente das informações que lhes
                                divulgamos e concordaram em aderir às regras estabelecidas nesta
                                declaração de privacidade.
                            </Text>

                            <Text style={styles.title}>3. Direitos de exclusão</Text>
                            <Text style={styles.description}>
                                Você pode interromper facilmente toda a coleta de informações pelo
                                Aplicativo desinstalando-o. Você pode usar os processos de
                                desinstalação padrão que podem estar disponíveis como parte
                            </Text>
                            <Text style={styles.title}>Política de retenção de dados</Text>
                            <Text style={styles.description}>
                                O Provedor de Serviços reterá os dados fornecidos pelo usuário enquanto
                                você usar o Aplicativo e por um período razoável a partir de então.
                                Se desejar que eles excluam os Dados Fornecidos pelo Usuário que você
                                forneceu por meio do Aplicativo, entre em contato com eles em
                                orquestracriarteapp@gmail.com e eles responderão em um prazo razoável.
                            </Text>
                            <Text style={styles.title}>4. Crianças</Text>
                            <Text style={styles.description}>
                                O Provedor de Serviços não usa o Aplicativo para solicitar intencionalmente
                                dados ou comercializá-los para crianças menores de 13 anos.
                            </Text>
                            <Text style={styles.description}>
                                O Aplicativo não se dirige a ninguém com menos de 13 anos de idade. O Provedor
                                de Serviços não coleta intencionalmente informações de identificação pessoal de
                                crianças com menos de 13 anos de idade. Caso o Provedor de Serviços descubra que
                                uma criança menor de 13 anos forneceu informações pessoais, o Provedor de Serviços
                                as excluirá imediatamente de seus servidores. Se você é pai ou responsável e tem
                                conhecimento de que seu filho nos forneceu informações pessoais, entre em contato
                                com o Prestador de Serviços (orquestracriarteapp@gmail.com) para que ele possa
                                tomar as medidas necessárias.
                            </Text>
                            <Text style={styles.title}>5. Segurança</Text>
                            <Text style={styles.description}>
                                O Provedor de Serviços se preocupa em salvaguardar a confidencialidade de suas
                                informações. O Provedor de Serviços fornece salvaguardas físicas, eletrônicas e
                                processuais para proteger as informações que o Provedor de Serviços processa e mantém.
                            </Text>
                            <Text style={styles.title}>6. Mudanças</Text>
                            <Text style={styles.description}>
                                Esta Política de Privacidade pode ser atualizada periodicamente por qualquer motivo.
                                O Provedor de Serviços irá notificá-lo sobre quaisquer alterações na Política de Privacidade,
                                atualizando esta página com a nova Política de Privacidade. Aconselhamos que consulte esta
                                Política de Privacidade regularmente para quaisquer alterações, pois o uso continuado é
                                considerado aprovação de todas as alterações.
                            </Text>
                            <Text style={styles.description}>
                                Esta política de privacidade entra em vigor a partir de 18/06/2024
                            </Text>
                            <Text style={styles.title}>7. Sua permissão</Text>
                            <Text style={styles.description}>
                                Ao usar o Aplicativo, você concorda com o processamento de suas informações conforme
                                estabelecido nesta Política de Privacidade agora e conforme alterado por nós.
                            </Text>
                            <Text style={styles.title}>8. Contate-nos</Text>
                            <Text style={styles.description}>
                                Caso você tenha alguma dúvida em relação à privacidade na utilização do Aplicativo, 
                                ou tenha dúvidas sobre as práticas, entre em contato com a Prestadora de Serviços 
                                através do e-mail orquestracriarteapp@gmail.com.
                            </Text>
                        </ScrollView>
                        <Button color={'#413267'} title="Fechar" onPress={handleCloseModal} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        maxHeight: '80%',
    },
    scrollViewContent: {
        paddingVertical: 20,
    },
    title: {
        color: '#413267',
        fontSize: 16,
        fontWeight: 'bold',
    },
    description: {
        marginBottom: 10,
    },
    transparentButton: {
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    transparentButtonText: {
        color: '#413267',
        fontSize: 12,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});

export default TermosModal;
