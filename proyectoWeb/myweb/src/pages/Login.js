import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";

// muestra un formulario para iniciar sesión en una aplicación. (Este está en fase de pruebas aun no es algo funcional)-
//Cuando el usuario envía el formulario, se verifica si el correo electrónico y la contraseña son válidos. (Fase en prueba)


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (email === "usuario@example.com" && password === "password") {
        toast({
          title: "Inicio de sesión exitoso",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Inicio de sesión fallido",
          description: "Por favor verifica tu correo y contraseña",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    };
  
    return (
      <Box p="10" borderWidth="1px" borderRadius="lg">
        <form onSubmit={handleSubmit}>
          <FormControl id="email" isRequired>
            <FormLabel>Correo electrónico</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormControl>
  
          <FormControl id="password" isRequired mt="4">
            <FormLabel>Contraseña</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormControl>
  
          <Button colorScheme="blue" mt="4" type="submit">
            Iniciar sesión
          </Button>
        </form>
      </Box>
    );
  }
  
  export default Login;