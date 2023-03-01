import React from 'react';
import { Button } from '@chakra-ui/react';

// este menu recibe un boton el cual esta posicionado encima del header.
function MenuButton() {
  return (
    <Button bg="#FF4500" color="white" size="md">
      Home
    </Button>
  );
}

export default MenuButton;
