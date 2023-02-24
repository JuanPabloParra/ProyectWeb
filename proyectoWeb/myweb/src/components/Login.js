import React from 'react';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

function Login() {
  return (
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
      <Button colorScheme="orange" borderRadius="md" mt={4}>Iniciar sesión</Button>
    </form>
  );
}

export default Login;
