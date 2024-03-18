import React from 'react';
import { TextInput, HelperText } from 'react-native-paper';
import { inputStyles } from '../styles/globalStyles';

interface InputProps {
  id?: string;
  value?: string;
  validate?: boolean;
  mask?: string;
  onChange?: (value: string) => void;
  onChangeText?: (value: string) => void;
  onBlur?: () => void;
  secureTextEntry?: boolean;
  errorMessage?: string;
  placeholder?: string;
  editable?: boolean;
  // ... other props
}

export default function InputComponent({
  id,
  value,
  validate,
  onChange,
  onChangeText,
  onBlur,
  secureTextEntry = false,
  errorMessage = '',
  placeholder,
  editable,
  ...otherProps
}: InputProps) {
  return (
    <>
      <TextInput
        id={id}
        mode="outlined"
        secureTextEntry={secureTextEntry}
        style={inputStyles.input}
        placeholder={placeholder}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        editable={editable}
        {...otherProps}
      />
      {errorMessage && <HelperText type="error">{errorMessage}</HelperText>}
    </>
  );
}
