import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: '#413267',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Title;
