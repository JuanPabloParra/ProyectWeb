import React from 'react';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
 
//Agrupación de etiquetas con FormControl
//En el texto de entrada para usuario junto con su curvatura de los bordes, se usa input type, bordeRadius, borderBottomRightRadius y borderBottomLeftRadius.
//En el texto de entrada para contraseña junto con su curvatura de los bordes, se usa input type, bordeRadius, borderBottomRightRadius y borderBottomLeftRadius.
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
      <Button bg="#FF4500" borderRadius="md" mt={4} color="#DDD8D8">Iniciar sesión</Button> 
    </form>
  );
}

export default Login;
