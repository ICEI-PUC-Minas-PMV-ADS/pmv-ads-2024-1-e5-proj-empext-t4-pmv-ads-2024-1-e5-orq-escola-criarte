import React from 'react';
import { View, Text, Pressable, StyleSheet, ViewStyle  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Option {
  label: string;
  action: () => void;
}

interface DropDownProps {
  options: Option[];
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
  style?: ViewStyle;
}

const DropDown: React.FC<DropDownProps> = ({ options, isVisible, setIsVisible }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setIsVisible(!isVisible)} style={styles.iconContainer}>
        <Icon name="bars" size={30} color="#413267" />
      </Pressable>
      {isVisible && (
        <View style={styles.dropdown}>
          {options.map((option, index) => (
            <Pressable
              key={index}
              style={styles.menuItem}
              onPress={() => {
                setIsVisible(false);
                option.action();
              }}>
              <Text style={styles.menuItemText}>{option.label}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    marginTop: '4%',
    right: 0,
    marginRight: '1.5%',
  },

  iconContainer: {
    marginRight: 10,
  },

  dropdown: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    width: 250,
    top: 44,
    right: -10,
    zIndex: 1000,
  },

  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    borderRadius: 5,
  },

  menuItemText: {
    color: '#413267',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DropDown;
