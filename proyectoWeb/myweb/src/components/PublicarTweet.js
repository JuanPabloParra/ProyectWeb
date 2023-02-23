import React, { useState } from 'react';
import { Box, Input, Button, Stack, Text } from '@chakra-ui/react';

function PublicarTweet() {
  const [tweet, setTweet] = useState('');
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [textoVacio, setTextoVacio] = useState(true);

  const enviarTweet = () => {
    if (tweet.trim() !== '') {
      setMensajeEnviado(true);
      setTimeout(() => {
        setMensajeEnviado(false);
      }, 2000);
    }
  };

  const handleInputChange = (e) => {
    setTweet(e.target.value);
    setTextoVacio(e.target.value.trim() === '');
  };

  return (
    <Box borderWidth="1px" borderRadius="md" p="3">
      <Input
        placeholder="¿Qué está pasando?"
        value={tweet}
        onChange={handleInputChange}
      />
      <Stack direction="row" justify="space-between" mt="3">
        <Box />
        <Button colorScheme="orange" size="md" onClick={enviarTweet} opacity={textoVacio ? 0.5 : 1}>
          Publicar
        </Button>
      </Stack>
      {mensajeEnviado && tweet.trim() !== '' && (
        <Text color="orange" mt="3">
          Mensaje enviado!
        </Text>
      )}
    </Box>
  );
}

export default PublicarTweet;
