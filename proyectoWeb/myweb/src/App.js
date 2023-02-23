import React from 'react';
import { ChakraProvider, Box, Flex, Text, Stack } from '@chakra-ui/react';
import Menu from './shared/Menu';
import PublicarTweet from './components/PublicarTweet';
import HomePage from './pages/HomePage';

function App() {
  return (
    // ChakraProvider es un componente de la biblioteca de interfaz de usuario de Chakra que proporciona estilo
    // y contexto temático a sus hijos
    // El menú es un componente personalizado que probablemente contiene enlaces u opciones de navegación
    <ChakraProvider>
      <Flex direction="column" align="center" maxW="800px" mx="auto" p="4" margin="auto">
        
        <Menu /> 
        
        <Box mt="4">
          <Text fontSize="2xl" fontWeight="bold">Comparte tu noticia del día.</Text>
          <Stack spacing="4" mt="4" maxW="100%" px="1">
            <PublicarTweet />
            <HomePage />
          </Stack>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default App;


