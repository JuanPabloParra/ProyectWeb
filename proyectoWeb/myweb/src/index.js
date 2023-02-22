import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, Box, Flex, Text } from '@chakra-ui/react';
import Menu from './shared/Menu';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <Flex direction="column" align="center" maxW="600px" mx="auto" p="4">
      <Menu />
      <Box mt="4">
        <Text fontSize="2xl" fontWeight="bold">Tweets</Text>
        {/* Contenido de los tweets */}
      </Box>
    </Flex>
  </ChakraProvider>
);

reportWebVitals();


