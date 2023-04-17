import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Button, Box, Flex, Text } from '@chakra-ui/react';
import MenuButton from '../shared/MenuButton';
import ProfileCircle from './ProfileCircle';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === 'usuario' && password === 'contraseña') {
      setIsLoggedIn(true);
    } else {
      setErrorMessage('Usuario o contraseña incorrectos');
    }
  };

  const handleInputChange = (event) => {
    setErrorMessage('');
    if (event.target.name === 'username') {
      setUsername(event.target.value);
    } else if (event.target.name === 'password') {
      setPassword(event.target.value);
    }
  }

  return (
    <Box as="header" borderBottomWidth="0">
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto" p="">
        <Box position="absolute" right="4" top="4">
          {isLoggedIn && <ProfileCircle userName={username} />} {/* Si se ha iniciado sesión, muestra el componente ProfileCircle con el nombre del usuario */}
        </Box>
        <Box position="absolute" left="20" top="4">
          <MenuButton />
        </Box>
      </Flex>
      <form>
        <FormControl>
          <h1>INICIAR SESIÓN:</h1>
          <FormLabel>Usuario</FormLabel>
          <Input
            type="text"
            borderRadius="md"
            borderTopRightRadius={0}
            borderTopLeftRadius={0}
            value={username}
            name="username"
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Contraseña</FormLabel>
          <Input
            type="password"
            borderRadius="md"
            borderBottomRightRadius={0}
            borderBottomLeftRadius={0}
            value={password}
            name="password"
            onChange={handleInputChange}
          />
        </FormControl>
        <Button bg="#FF4500" borderRadius="md" mt={4} color="#DDD8D8" onClick={handleLogin}>
          Iniciar sesión
        </Button>
        {errorMessage && <Text mt={2} color="red.500">{errorMessage}</Text>}
      </form>
    </Box>
  );
}

export default Login;

