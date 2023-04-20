import React from 'react';
import { Button } from '@chakra-ui/react';

function MenuButton() {
  const handleClick = () => {
    window.location.href = '/menu';
  };

  return (
    <Button bg="#FF4500" color="white" size="md" onClick={handleClick}>
      Menu
    </Button>
  );
}

export default MenuButton;