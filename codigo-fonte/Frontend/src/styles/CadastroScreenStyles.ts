import { Platform, StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    marginTop: 50,
    height: '100%',
  },

  content: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  header: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
    marginVertical: 10,
  },

  formulario: {
    marginTop: 30,
    flexDirection: 'column',
    width: '93%',
    maxWidth: 400,
  },

  eyeIcon: {
    marginLeft: -35,
    marginBottom: 10,
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

  botao: {
    width: '93%',
    marginTop: 30,
  }
});

export default styles;
