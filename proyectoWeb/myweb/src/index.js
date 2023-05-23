import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, Box, Flex, Text } from '@chakra-ui/react';
import Menu from './shared/Menu';
import HomePage from './pages/HomePage';
import App from './App';
import ChatBubble from './components/ChatBubble';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Flex direction="column" align="center" maxW="1200px" mx="auto" p="4">
        <Box mt="4">
          <Text fontSize="2xl" fontWeight="bold"></Text>
          <HomePage />
          <App />
          <ChatBubble /> {/* Agrega este componente aquí */}
        </Box>
      </Flex>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
