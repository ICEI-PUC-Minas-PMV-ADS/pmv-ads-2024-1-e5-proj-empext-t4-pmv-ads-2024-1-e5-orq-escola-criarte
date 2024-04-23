import React from 'react';
import { Button } from 'react-native-paper';
import { buttonStyles } from '../styles/globalStyles';

interface ButtonProps {
  onPress: () => void;
  text: string;
  disabled?: boolean;
  mode?: 'text' | 'outlined' | 'contained';
  readOnly?: boolean;
  style?: object;
}

export default function ButtonComponent({ 
  onPress, 
  disabled = false, 
  text, 
  mode = 'contained',
  readOnly = false,
  style,
  ...otherProps

}: ButtonProps) 
{
  const handlePress = readOnly ? () => {} : onPress;

  return (
    <Button 
      mode={mode} 
      disabled={disabled} 
      onPress={handlePress} 
      style={[buttonStyles.button, style]}
      {...otherProps}
    >
      {text}
    </Button>
  );
}
