import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';

interface TermosCheckboxProps {
  checked: boolean;
  onValueChange: (checked: boolean) => void;
  style?: object;
}


const TermosCheckbox: React.FC<TermosCheckboxProps> = ({ onValueChange, style }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handlePress = () => {
    const newValue = !checked;
    setChecked(newValue);
    onValueChange(newValue);
  };

  return (
    <View style={[{ flexDirection: 'row', alignItems: 'center' }, style]}>
      <Checkbox.Android status={checked ? 'checked' : 'unchecked'} onPress={handlePress} />
      <Text style={{color: '#413267', fontWeight: 'bold'}}>Li e concordo com os termos</Text>
    </View>
  );
}

export default TermosCheckbox;
