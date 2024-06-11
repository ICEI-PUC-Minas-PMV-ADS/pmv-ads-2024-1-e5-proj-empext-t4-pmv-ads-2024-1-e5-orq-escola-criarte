// src/styles/LoginScreenStyles.ts
import {Platform, StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  background: {
    flex: 1,

    justifyContent: 'center'
  },

  container: {
    flex: 1,
    marginTop: 10,
  },

  content: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    marginBottom: 5,
    marginTop: 10,
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

  texto: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#413267',
    lineHeight: 24,
    marginBottom: 5,
  },

  eyeIcon: {
    marginLeft: -35,
    marginBottom: 10,
    color: "#413267",
  },

  buttonConteiner: {
    alignItems: 'center',
    marginBottom: 20,
  },

  botaoCadastrar: {
    width: '80%',
  },

  SignInButton: {
    marginTop: 15,
  },

  botaoCadastro: {
    width: '80%',
    bottom: 0,
    alignSelf: 'center',
    maxWidth: 400,
    marginBottom: 10,
  },

  errorModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  errorModalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },

  errorModalText: {
    fontSize: 18,
    marginBottom: 10,
  },

  errorModalButton: {
    marginTop: 10,
    backgroundColor: '#6750a4',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },

  errorModalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },


});

export default styles;
