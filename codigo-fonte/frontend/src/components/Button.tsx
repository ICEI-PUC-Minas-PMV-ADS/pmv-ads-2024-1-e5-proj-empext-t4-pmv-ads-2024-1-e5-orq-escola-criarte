import React from 'react';
import { Button } from 'react-native-paper';
import { buttonStyles } from '../styles/globalStyles';

interface ButtonProps {
  onPress: () => void;
  text: string;
  mode?: 'text' | 'outlined' | 'contained'; // Defina os modos permitidos aqui
}

export default function ButtonComponent({ onPress, text, mode = 'contained' }: ButtonProps) {
  return (
    <Button mode={mode} onPress={onPress} style={buttonStyles.button}>
      {text}
    </Button>
  );
}
