// src/styles/LoginScreenStyles.ts
import { StyleSheet } from 'react-native';

const loginScreenStyles = StyleSheet.create({

  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  logo: {
    width: 200,
    height: 200,
    marginBottom: 75,
    marginTop: 50,
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
