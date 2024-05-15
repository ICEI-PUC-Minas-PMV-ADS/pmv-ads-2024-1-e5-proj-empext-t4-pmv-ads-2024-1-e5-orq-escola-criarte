import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Option {
  label: string;
  action: () => void;
}

interface DropDownProps {
  options: Option[];
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
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
    position: 'relative',
    marginRight: 10,
  },

  iconContainer: {
    marginRight: 10,
  },

  dropdown: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    width: 150,
    top: 40,
    right: 0,
    zIndex: 1000,
    borderRadius: 5,
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
