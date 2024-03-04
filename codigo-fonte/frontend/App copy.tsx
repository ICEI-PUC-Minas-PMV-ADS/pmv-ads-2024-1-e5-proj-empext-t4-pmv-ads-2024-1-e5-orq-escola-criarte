import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/login';
import loginScreenStyles from './src/styles/LoginScreenStyles';
import { ImageBackground } from 'react-native';

export default function App() {
  return (
    <LoginScreen/>
  );
}
