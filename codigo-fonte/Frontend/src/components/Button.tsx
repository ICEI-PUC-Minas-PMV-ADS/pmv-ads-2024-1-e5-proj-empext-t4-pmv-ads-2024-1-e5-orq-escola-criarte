import React from 'react';
import { Button } from 'react-native-paper';
import { buttonStyles } from '../styles/globalStyles';

interface ButtonProps {
  onPress: () => void;
  text: string;
  disabled?: boolean;
  mode?: 'text' | 'outlined' | 'contained'; // Defina os modos permitidos aqui
}

export default function ButtonComponent({ onPress, disabled = false, text, mode = 'contained' }: ButtonProps) {
  return (
    <Button mode={mode} disabled={disabled} onPress={onPress} style={buttonStyles.button}>
      {text}
    </Button>
  );
}
