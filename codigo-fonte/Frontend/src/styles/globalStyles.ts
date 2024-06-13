// src/styles/globalStyles.ts
import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
  button: {
    width: '100%',
    marginBottom: 10,
    height: 48,
    justifyContent: 'center',
  },
  text: {
    fontSize: 17,
  },
});

export const inputStyles = StyleSheet.create({
  input: {
    width: '100%',
    height: 48,
    marginBottom: 10,
    fontSize: 17,
    color: 'black',
    backgroundColor: 'rgba(255,255,255,0.85)',
  },
});
