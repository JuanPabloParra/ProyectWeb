import React from 'react';
import { FormControl, FormLabel, Input, Button, Box, Flex } from '@chakra-ui/react';
import  MenuButton  from '../shared/MenuButton'; // Importa el componente del botón del menú

function Login() {
  return (
    <Box as="header" borderBottomWidth="0">
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto" p="">
        <Box position="absolute" left="20" top="4">
          <MenuButton />
        </Box>
      </Flex>
      <form> 
        <FormControl>  
          <h1> INICIAR SESIÓN:</h1>
          <FormLabel>Usuario</FormLabel>
          <Input type="text" borderRadius="md" borderTopRightRadius={0} borderTopLeftRadius={0} /> 
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Contraseña</FormLabel>
          <Input type="password" borderRadius="md" borderBottomRightRadius={0} borderBottomLeftRadius={0} />
        </FormControl>
        <Button bg="#FF4500" borderRadius="md" mt={4} color="#DDD8D8">Iniciar sesión</Button> 
      </form>
    </Box>
  );
}

export default Login;

