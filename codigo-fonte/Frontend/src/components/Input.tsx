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
  errorMessage?: string | boolean;
  placeholder?: string;
  editable?: boolean;
  style?: object;
  placeholderTextColor?: string;

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
  style,
  placeholderTextColor,
  ...otherProps
}: InputProps) {
  return (
    <>
      <TextInput
        id={id}
        mode="outlined"
        secureTextEntry={secureTextEntry}
        style={[inputStyles.input, style]}
        placeholder={placeholder}
        placeholderTextColor={'#999999'}
        onChangeText={(text) => {
          onChange && onChange(text);
          onChangeText && onChangeText(text);
        }}
        onBlur={onBlur}
        value={value}
        editable={editable}
        {...otherProps}
      />
      {errorMessage && <HelperText type="error">{errorMessage}</HelperText>}
    </>
  );
}
