import { useState } from "react";
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
} from "@chakra-ui/react";
import { FiMessageSquare, FiX } from "react-icons/fi";

const ChatBubble = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState("");
  const chatBg = useColorModeValue("white", "gray.700");
  const chatBorderColor = useColorModeValue("gray.200", "gray.600");
  const chatShadow = useColorModeValue(
    "0 1px 2px rgba(0, 0, 0, 0.2)",
    "none"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando mensaje:", message);
    setMessage("");
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
        _hover={{ bg: "orangeue.600" }}
        _active={{ bg: "orange.700" }}
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
        transform={isOpen ? "translateY(0)" : "translateY(100%)"}
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
          <Box borderWidth="1px" borderColor={chatBorderColor} borderRadius="lg" p={2} mb={2}>
            <Text fontSize="sm" color="gray.500">
              No hay mensajes.
            </Text>
          </Box>
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <Input
                placeholder="Escribe tu mensaje"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                size="sm"
                borderRadius="lg"
              />
              <InputRightElement>
                <Button type="submit" variant="outline" size="sm">
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
