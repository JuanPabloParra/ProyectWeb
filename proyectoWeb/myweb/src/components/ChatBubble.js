import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiMessageSquare, FiX } from 'react-icons/fi';
import axios from 'axios';

const ChatBubble = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState('');
  const [messagesList, setMessagesList] = useState([]);
  const chatBg = useColorModeValue('white', 'gray.700');
  const chatBorderColor = useColorModeValue('gray.200', 'gray.600');
  const chatShadow = useColorModeValue('0 1px 2px rgba(0, 0, 0, 0.2)', 'none');

  // Obtener los mensajes al cargar el componente
  useEffect(() => {
    getMessages();
  }, []);

  // Función para obtener los mensajes de la base de datos
  const getMessages = async () => {
    try {
      const response = await axios.get('http://localhost:3000/messages');
      setMessagesList(response.data);
    } catch (error) {
      console.error('Error al obtener los mensajes:', error);
    }
  };

  // Función para guardar un nuevo mensaje
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Enviando mensaje:', message);

    try {
      // Enviar el mensaje al backend
      await axios.post('http://localhost:3000/messages', { content: message });

      // Actualizar la lista de mensajes
      setMessagesList([...messagesList, { content: message }]);
      setMessage('');
    } catch (error) {
      console.error('Error al guardar el mensaje:', error);
    }
  };

  return (
    <>
      <Box
        position="fixed"
        bottom="4"
        right="4"
        zIndex="docked"
        cursor="pointer"
        onClick={onOpen}
        borderRadius="full"
        bg="orange.500"
        w="50px"
        h="50px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        boxShadow={chatShadow}
        transition="all 0.2s"
        _hover={{ bg: 'orange.600' }}
        _active={{ bg: 'orange.700' }}
      >
        <FiMessageSquare size={24} color="white" />
      </Box>

      <Box
        position="fixed"
        bottom="4"
        right="4"
        zIndex="modal"
        width="300px"
        bg={chatBg}
        borderWidth="1px"
        borderColor={chatBorderColor}
        borderRadius="lg"
        boxShadow={chatShadow}
        transition="all 0.2s"
        transform={isOpen ? 'translateY(0)' : 'translateY(100%)'}
        opacity={isOpen ? 1 : 0}
      >
        <Flex justify="space-between" align="center" p={3}>
          <Text fontWeight="bold">Chat</Text>
          <IconButton
            aria-label="Cerrar chat"
            icon={<FiX />}
            variant="ghost"
            size="sm"
            onClick={onClose}
          />
        </Flex>
        <Box p={3}>
          <Text fontSize="sm" color="gray.500" mb={2}>
            Historial de mensajes
          </Text>
          {messagesList.length ? (
            messagesList.map((msg, index) => (
              <Box
                key={index}
                borderWidth="1px"
                borderColor={chatBorderColor}
                borderRadius="lg"
                p={2}
                mb={2}
              >
                <Text fontSize="sm" color="gray.500">
                  {msg.content}
                </Text>
              </Box>
            ))
          ) : (
            <Box
              borderWidth="1px"
              borderColor={chatBorderColor}
              borderRadius="lg"
              p={2}
              mb={2}
            >
              <Text fontSize="sm" color="gray.500">
                No hay mensajes
              </Text>
            </Box>
          )}

          <form onSubmit={handleSubmit}>
            <InputGroup>
              <Input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe un mensaje..."
                size="sm"
                focusBorderColor="orange.500"
                borderTopRadius="0"
              />
              <InputRightElement>
                <Button
                  type="submit"
                  size="sm"
                  bg="orange.500"
                  color="white"
                  px={4}
                  borderTopRadius="0"
                  _hover={{ bg: 'orange.600' }}
                  _active={{ bg: 'orange.700' }}
                >
                  Enviar
                </Button>
              </InputRightElement>
            </InputGroup>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default ChatBubble;
