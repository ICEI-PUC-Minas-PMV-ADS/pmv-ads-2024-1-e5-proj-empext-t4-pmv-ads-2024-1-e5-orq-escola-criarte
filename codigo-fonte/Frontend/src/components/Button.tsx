import React from 'react';
import { Button } from 'react-native-paper';
import { buttonStyles } from '../styles/globalStyles';

interface ButtonProps {
  onPress: () => void;
  text: string;
  disabled?: boolean;
  mode?: 'text' | 'outlined' | 'contained';
  editable?: boolean;
  style?: object;
}

export default function ButtonComponent({ 
  onPress, 
  disabled = false, 
  text, 
  mode = 'contained',
  editable,
  style,
  ...otherProps

}: ButtonProps) 
{

  return (
    <Button 
      mode={mode} 
      disabled={disabled} 
      onPress={onPress} 
      style={[buttonStyles.button, style]}
      {...otherProps}
    >
      {text}
    </Button>
  );
}
