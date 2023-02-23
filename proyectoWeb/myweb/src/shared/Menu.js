import { Flex } from '@chakra-ui/react';
import ProfileCircle from '../components/ProfileCircle';
import MenuButton from './MenuButton';
import Divider from './Divider';
import { Box } from '@chakra-ui/react';

//esta funcion cuadra la estetica visual del boton, divider y las funciones propias de chakra-ui 
function Menu() {
  return (
    <Box as="header" w="300%" borderBottomWidth="1px">
      <Flex justify="space-between" align="r" maxW="1200px" mx="auto" p="1">
        <MenuButton />
        <ProfileCircle />
      </Flex>
      <Divider />
    </Box>
  );
}

export default Menu;

