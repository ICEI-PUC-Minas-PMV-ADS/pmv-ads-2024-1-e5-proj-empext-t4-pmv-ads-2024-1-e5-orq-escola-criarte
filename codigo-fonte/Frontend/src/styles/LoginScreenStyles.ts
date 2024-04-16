// src/styles/LoginScreenStyles.ts
import { StyleSheet } from 'react-native';

const loginScreenStyles = StyleSheet.create({

  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  logo: {
    width: 200,
    height: 200,
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
});

export default loginScreenStyles;
