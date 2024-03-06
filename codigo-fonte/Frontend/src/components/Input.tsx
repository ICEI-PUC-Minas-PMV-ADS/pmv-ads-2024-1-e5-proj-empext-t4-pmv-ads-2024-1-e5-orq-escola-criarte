// src/components/Input.tsx
import React from 'react';
import { TextInput } from 'react-native-paper';
import { inputStyles } from '../styles/globalStyles';

interface InputProps {
  name?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  errorMessage?: string;
  placeholder?: string;
  required?: boolean;
  validate?: (value: string) => boolean;
  mask?: string;
  autoComplete?: string;
  className?: string;
  style?: React.CSSProperties;
  [x: string]: any;
}

export default function InputComponent({ label, secureTextEntry }: InputProps) {
  return (
    <TextInput label={label} mode="outlined" secureTextEntry={secureTextEntry} style={inputStyles.input} />
  );
}
