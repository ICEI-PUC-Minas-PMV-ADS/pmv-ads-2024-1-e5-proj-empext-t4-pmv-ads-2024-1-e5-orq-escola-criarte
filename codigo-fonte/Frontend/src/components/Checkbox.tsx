import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import TermosModal from './ModalTermos';
import PrivacyModal from './PrivacyTermos';

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
    <View style={[{ flexDirection: 'row', alignItems: 'center', marginLeft: -25 }, style]}>
      <TouchableOpacity
        onPress={handlePress}
        accessibilityRole="checkbox"
        accessibilityLabel="Li e concordo com os termos"
        accessibilityState={{ checked }}
        style={{ flexDirection: 'row', alignItems: 'center' }}
      >
        <View style={{ transform: [{ scale: 1.1 }], justifyContent: 'center', alignItems: 'center' }}>
          <Checkbox.Android
            status={checked ? 'checked' : 'unchecked'}
            onPress={handlePress}
          />
        </View>

        <Text style={{ color: '#413267', fontSize: 12, marginRight: 3 }}>
          Li e concordo com os
        </Text>
      </TouchableOpacity>
      <TermosModal />
      <Text style={{ color: '#413267', fontSize: 12, marginRight: 3,marginLeft: 3 }}>
        e a
      </Text>
      <PrivacyModal />
    </View>
  );
};

export default TermosCheckbox;
