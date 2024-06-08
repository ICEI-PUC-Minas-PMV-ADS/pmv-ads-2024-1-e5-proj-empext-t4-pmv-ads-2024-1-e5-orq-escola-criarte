// src/styles/LoginScreenStyles.ts
import { StyleSheet } from 'react-native';

const loginScreenStyles = StyleSheet.create({

  background: {
    flex: 1,
    justifyContent: 'center'
    
  },

  logo: {
    marginBottom: 5,
    marginTop: 10,
  },

  buttonConteiner: {
    alignItems: 'center',
    marginBottom: 20,
  },

  botaoCadastrar: {
    width: '80%',
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

export default loginScreenStyles;
