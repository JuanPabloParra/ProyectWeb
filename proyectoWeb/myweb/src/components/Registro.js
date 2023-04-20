import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Button, Box, Text } from '@chakra-ui/react';

function Registro() {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleRegistro = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo, contraseña }),
      });
      const data = await response.json();
      setMensaje(`Usuario ${data.correo} creado con éxito.`);
      setCorreo('');
      setContraseña('');
    } catch (error) {
      console.error(error);
      setMensaje('Hubo un problema al crear el usuario. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <Box>
      <form onSubmit={handleRegistro}>
        <FormControl>
          <h1>REGISTRO:</h1>
          <FormLabel>Correo</FormLabel>
          <Input
            type="email"
            borderRadius="md"
            borderTopRightRadius={0}
            borderTopLeftRadius={0}
            value={correo}
            onChange={(event) => setCorreo(event.target.value)}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Contraseña</FormLabel>
          <Input
            type="password"
            borderRadius="md"
            borderBottomRightRadius={0}
            borderBottomLeftRadius={0}
            value={contraseña}
            onChange={(event) => setContraseña(event.target.value)}
          />
        </FormControl>
        <Button bg="#FF4500" borderRadius="md" mt={4} color="#DDD8D8" type="submit">
          Registrar usuario
        </Button>
      </form>
      {mensaje && <Text mt={2} color="green.500">{mensaje}</Text>}
    </Box>
  );
}

export default Registro;
