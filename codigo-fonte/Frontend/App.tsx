import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MyStack from './src/router/stack';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6750a4', // cor primária
    accent: 'yellow', // cor secundária
    text: 'black', // cor do texto
  },
};

const MainStack = () => {
  return (
    <PaperProvider theme={theme}>
      <MyStack/>
    </PaperProvider>
    
  );
}

export default MainStack;