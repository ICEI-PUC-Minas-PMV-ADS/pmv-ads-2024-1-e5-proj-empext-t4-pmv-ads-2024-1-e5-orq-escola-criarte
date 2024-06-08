import { Platform, StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },

  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    marginTop: 10,
  },

  content: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  scrollContentContainer: {
    paddingBottom: 50,
  },

  header: {
    alignItems: 'center',
    marginBottom: 5,
    marginVertical: 10,
  },

  formulario: {
    marginTop: 5,
    flexDirection: 'column',
    width: '80%',
    maxWidth: 400,
  },

  eyeIcon: {
    marginLeft: -35,
    marginBottom: 10,
    color: "#413267",
  },

  titulo: {
    textAlign: 'center',
    fontSize: 33,
    fontWeight: 'bold',
    color: '#413267',
  },

  texto: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#413267',
    lineHeight: 24,
    marginBottom: 5,
  },

  requisitos: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    color: '#212121',
  },

  checkLogo: {
    width: 10,
    height: 10,
  },

  botao: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 5,
  },

  checkbox: {
    marginTop: 25,
  },

  botaoCadastro: {
    width: '80%',
    position: "absolute",
    bottom: 0,
    alignSelf: 'center',
    maxWidth: 400,
    marginBottom: 10,
  },

  popupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  popupContent: {
    height: 180,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  popupTitle: {
    fontSize: 20,
    marginBottom: 10,
  },

  popupMessage: {
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default styles;
