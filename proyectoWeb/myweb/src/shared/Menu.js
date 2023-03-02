import { Flex } from '@chakra-ui/react';
import ProfileCircle from '../components/ProfileCircle';
import MenuButton from './MenuButton';
import Divider from './Divider';
import { Box } from '@chakra-ui/react';

function Menu() {
  return (
    <Box as="header" borderBottomWidth="4px">
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto" p="">
      <Box position="absolute" left="20" top="4">
  <MenuButton />
</Box>

        <Box position="absolute" right="20" top="4">
          <ProfileCircle />
          </Box>
  </Flex>
  <Divider w="150%" />
  <Flex justify="space-between" align="center" maxW="1200px" mx="1000" p="2">
  </Flex>
</Box>

  );
}

export default Menu;

