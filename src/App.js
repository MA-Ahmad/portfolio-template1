import * as React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './components/Home';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Home />
      </Box>
    </ChakraProvider>
  );
};
