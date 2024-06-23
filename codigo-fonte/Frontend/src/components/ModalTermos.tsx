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
                <Text style={styles.transparentButtonText}>Termos de Serviço</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <ScrollView contentContainerStyle={styles.scrollViewContent}>
                            <Text style={styles.title}>Termos e Condições</Text>
                            <Text style={styles.description}>Estes termos e condições se aplicam ao aplicativo OEC Informes
                                (doravante denominado "Aplicativo") para dispositivos móveis que foi criado pela S2START
                                (doravante denominado "Provedor de Serviços") como um serviço Gratuito</Text>
                            <Text style={styles.description}>Ao baixar ou utilizar o Aplicativo, você concorda automaticamente
                                com os seguintes termos. É altamente recomendável que você leia e compreenda atentamente estes
                                termos antes de usar o Aplicativo. Cópia não autorizada, modificação do Aplicativo, de qualquer
                                parte do Aplicativo ou de nossas marcas registradas são estritamente proibidas. Quaisquer
                                tentativas de extrair o código-fonte do Aplicativo, traduzir o Aplicativo para outros idiomas
                                ou criar versões derivadas não são permitidas. Todas as marcas registradas, direitos autorais,
                                direitos de banco de dados e outros direitos de propriedade intelectual relacionados ao Aplicativo
                                permanecem propriedade do Provedor de Serviços.</Text>
                            <Text style={styles.description}>O Provedor de Serviços se dedica a garantir que o Aplicativo seja o
                                mais benéfico e eficiente possível. Como tal, reservam-se o direito de modificar a Aplicação ou
                                cobrar pelos seus serviços a qualquer momento e por qualquer motivo. O Provedor de Serviços garante
                                que quaisquer cobranças pelo Aplicativo ou seus serviços serão claramente comunicadas a você.</Text>
                            <Text style={styles.description}>O Aplicativo armazena e processa dados pessoais que você forneceu ao
                                Provedor de Serviços para fornecer o Serviço. É sua responsabilidade manter a segurança do seu
                                telefone e o acesso ao Aplicativo. O Provedor de Serviços desaconselha fortemente o jailbreak ou
                                root do seu telefone, o que envolve a remoção de restrições e limitações de software impostas pelo
                                sistema operacional oficial do seu dispositivo. Tais ações podem expor seu telefone a malware,
                                vírus, programas maliciosos, comprometer os recursos de segurança do telefone e fazer com que o
                                Aplicativo não funcione corretamente ou não funcione de todo.
                                Observe que o Aplicativo utiliza serviços de terceiros que possuem seus próprios Termos e Condições.
                                Abaixo estão os links para os Termos e Condições dos prestadores de serviços terceirizados usados ​​pelo Aplicativo:</Text>
                            <Text style={styles.description}>•	Google Play Services</Text>
                            <Text style={styles.description}>Esteja ciente de que o Provedor de Serviços não assume responsabilidade
                                por determinados aspectos. Algumas funções do Aplicativo requerem uma conexão ativa com a internet,
                                que pode ser Wi-Fi ou fornecida pela sua operadora de rede móvel. O Provedor de Serviços não pode ser
                                responsabilizado se o Aplicativo não funcionar em plena capacidade devido à falta de acesso ao Wi-Fi
                                ou se você tiver esgotado seu limite de dados.</Text>
                            <Text style={styles.description}>Se você estiver usando o aplicativo fora de uma área Wi-Fi, esteja ciente
                                de que os termos do contrato da sua operadora de rede móvel ainda se aplicam. Consequentemente, você
                                poderá incorrer em cobranças da sua operadora de celular pelo uso de dados durante a conexão com o
                                aplicativo ou outras cobranças de terceiros. Ao usar o aplicativo, você assume a responsabilidade por
                                tais cobranças, incluindo tarifas de roaming de dados, se usar o aplicativo fora do seu território
                                (ou seja, região ou país) sem desativar o roaming de dados. Se você não for o pagador da conta do
                                dispositivo no qual está usando o aplicativo, eles presumem que você obteve permissão do pagador da conta.</Text>
                            <Text style={styles.description}>Da mesma forma, o Provedor de Serviços nem sempre pode assumir a responsabilidade
                                pelo uso do aplicativo. Por exemplo, é sua responsabilidade garantir que seu dispositivo permaneça carregado.
                                Se o seu dispositivo ficar sem bateria e você não conseguir acessar o Serviço, o Provedor de Serviços não
                                poderá ser responsabilizado.</Text>
                            <Text style={styles.description}>Em termos da responsabilidade do Provedor de Serviços pelo uso do aplicativo,
                                é importante observar que, embora eles se esforcem para garantir que ele esteja sempre atualizado e preciso,
                                eles dependem de terceiros para fornecer informações a eles para que possam disponibilizá-lo para você.
                                O Provedor de Serviços não se responsabiliza por qualquer perda, direta ou indireta, que você sofra como
                                resultado de confiar inteiramente nesta funcionalidade do aplicativo.</Text>
                            <Text style={styles.description}>O Provedor de Serviços pode desejar atualizar o aplicativo em algum momento.
                                O aplicativo está disponível atualmente de acordo com os requisitos do sistema operacional (e de quaisquer
                                sistemas adicionais para os quais eles decidam estender a disponibilidade do aplicativo) podem mudar e
                                você precisará baixar as atualizações se quiser continuar usando o aplicativo. O Provedor de Serviços não
                                garante que sempre atualizará o aplicativo para que seja relevante para você e/ou compatível com a versão
                                específica do sistema operacional instalada em seu dispositivo. No entanto, você concorda em sempre aceitar
                                atualizações do aplicativo quando oferecidas a você. O Provedor de Serviços também pode desejar interromper
                                o fornecimento do aplicativo e encerrar seu uso a qualquer momento sem fornecer aviso de rescisão a você.
                                A menos que eles informem o contrário, após qualquer rescisão, (a) os direitos e licenças concedidos a
                                você nestes termos terminarão; (b) você deve parar de usar o aplicativo e (se necessário) excluí-lo do seu
                                dispositivo.</Text>

                            <Text style={styles.title}>Alterações a estes Termos e Condições</Text>
                            <Text style={styles.description}>O Provedor de Serviços poderá atualizar periodicamente seus Termos e Condições.
                                Portanto, é aconselhável revisar esta página regularmente para verificar quaisquer alterações. O Provedor de
                                Serviços irá notificá-lo sobre quaisquer alterações publicando os novos Termos e Condições nesta página.</Text>
                            <Text style={styles.description}>Estes termos e condições entram em vigor a partir de 18/06/2024</Text>
                            <Text style={styles.title}>Contate-nos</Text>
                            <Text style={styles.description}>Se você tiver alguma dúvida ou sugestão sobre os Termos e Condições, não hesite
                                em entrar em contato com o Prestador de Serviços pelo e-mail orquestracriarteapp@gmail.com.</Text>

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
