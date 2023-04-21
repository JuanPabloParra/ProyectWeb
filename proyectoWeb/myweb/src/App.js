import React, { useState } from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import Menu from './shared/Menu';
import Login from './components/Login';
import PublicarTweet from './components/PublicarTweet';
import { ChakraProvider } from '@chakra-ui/react';
import RedditCards from './components/RedditCards';
import ProfileCircle from './components/ProfileCircle.js';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showCompartir, setShowCompartir] = useState(true);

  const handleLoginClick = (event) => {
    event.preventDefault();
    setShowLogin(true);
  };

  return (
    <ChakraProvider>
      {!showLogin ? (
        <Flex direction="column" align="center" maxW="800px" mx="auto" p="4" margin="auto">
          <Menu />
          <Box mt="4">
            <Text fontSize="2xl" fontWeight="bold">Comparte tu noticia del día.</Text>
          </Box>
          {showCompartir && (
            <Box mt="4">
              <PublicarTweet />
            </Box>
          )}
          <Box mt="4">
            <Link href="#" onClick={handleLoginClick}>Dale click aquí para iniciar sesión</Link>

          </Box>
          <Box mt="4">
  <RedditCards />
  <Box position="absolute" top="4" right="4">
  <ProfileCircle userName="John" />
</Box>

</Box>

        </Flex>
      ) : (
        <Box bg="white" w="100%" h="100%">
          <Login />
        </Box>
      )}
    </ChakraProvider>
  );
}

export default App;

