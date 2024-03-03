// src/components/Input.tsx
import React from 'react';
import { TextInput } from 'react-native-paper';
import { inputStyles } from '../styles/globalStyles';

interface InputProps {
  label: string;
  secureTextEntry?: boolean;
}

export default function InputComponent({ label, secureTextEntry }: InputProps) {
  return (
    <TextInput label={label} mode="outlined" secureTextEntry={secureTextEntry} style={inputStyles.input} />
  );
}
