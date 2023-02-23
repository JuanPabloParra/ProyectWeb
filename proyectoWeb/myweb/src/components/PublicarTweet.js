import React from 'react';
import { Box, Input, Button, Stack } from '@chakra-ui/react';

function PublicarTweet() {
  return (
    <Box borderWidth="1px" borderRadius="md" p="3">
      <Input placeholder="¿Qué está pasando?" />
      <Stack direction="row" justify="space-between" mt="3">
        <Box />
        <Button colorScheme="blue" size="md">
          Publicar
        </Button>
      </Stack>
    </Box>
  );
}

export default PublicarTweet;
