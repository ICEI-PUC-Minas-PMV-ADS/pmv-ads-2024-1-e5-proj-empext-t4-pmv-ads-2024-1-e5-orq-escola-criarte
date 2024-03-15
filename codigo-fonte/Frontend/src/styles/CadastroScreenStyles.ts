import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  titulo: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#333',
  },

  subTitulo: {
    fontSize: 14,
    color: '#666',
  },

  texto:{
    fontSize: 19,
    color: '#000',
    lineHeight: 24,
    marginBottom: 5,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  formulario: {
    flex: 1,
    flexDirection: 'column',
    width: '90%',
  },

  header: {
    marginBottom: 20,
  },

  botao: {
    width: '85%',
  }
});

export default styles;
