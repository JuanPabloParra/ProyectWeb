import { Box } from '@chakra-ui/react';
//este componente recibe un borde solid gray para poder hacer una division del header de la web.
function Divider() {
  return (
    <Box as="hr" borderBottom="1px solid gray" my="0" w="90%" position="absolute" top="66px" />
  );
}

export default Divider;


