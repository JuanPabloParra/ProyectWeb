import React from 'react';
import { ChakraProvider, Box, Flex, Text, Stack } from '@chakra-ui/react';
import Menu from './shared/Menu';
import PublicarTweet from './components/PublicarTweet';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ChakraProvider>
      <Flex direction="column" align="center" maxW="600px" mx="auto" p="4">
        <Menu />
        <Box mt="4">
          <Text fontSize="2xl" fontWeight="bold">Comparte tu noticia del día.</Text>
          <Stack spacing="4" mt="4" w="100%">
            <PublicarTweet />
            <HomePage />
          </Stack>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;

