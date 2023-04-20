import React, { useState } from 'react';
import { Box, Input, Button, Stack, Text } from '@chakra-ui/react';

function PublicarTweet({ onMensajeEnviado }) {
  const [tweet, setTweet] = useState('');
  const [textoVacio, setTextoVacio] = useState(true);

  const enviarTweet = () => {
    if (tweet.trim() !== '') {
      onMensajeEnviado({
        texto: tweet,
        fecha: new Date(),
        likes: 0, // Agregar una nueva propiedad "likes" al mensaje
      });
      setTweet('');
      setTextoVacio(true);
    }
  };

  const handleInputChange = (e) => {
    setTweet(e.target.value);
    setTextoVacio(e.target.value.trim() === '');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      enviarTweet();
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="md" p="3">
      <Input
        placeholder="¿Qué está pasando?"
        value={tweet}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <Stack direction="row" justify="space-between" mt="3">
        <Box />
        <Button bg="#FF4500" color="white" size="md" onClick={enviarTweet} opacity={textoVacio ? 0.5 : 1}>
          Publicar
        </Button>
      </Stack>
    </Box>
  );
}

function Foro() {
  const [mensajes, setMensajes] = useState([]);

  const agregarMensaje = (mensaje) => {
    setMensajes([...mensajes, mensaje]);
  };

  const manejarLike = (index) => {
    const nuevosMensajes = mensajes.map((mensaje, i) => {
      if (i === index) {
        return { ...mensaje, likes: mensaje.likes > 0 ? 0 : 1 };
      } else {
        return mensaje;
      }
    });
    setMensajes(nuevosMensajes);
  };
  

  return (
    <Box>
      <PublicarTweet onMensajeEnviado={agregarMensaje} />
      {mensajes.map((mensaje, index) => (
        <Box borderWidth="1px" borderRadius="md" p="3" mt="3">
          <Text>{mensaje.texto}</Text>
          <Text fontSize="sm" color="gray.500">
            {mensaje.fecha.toLocaleString()}{" "}
            - Likes: {mensaje.likes}{" "}
            <Button size="xs" onClick={() => manejarLike(index)}>
              Me gusta
            </Button>
          </Text>
        </Box>
      ))}
    </Box>
  );
}

export default Foro;

/*Esta función define un componente llamado "PublicarTweet" que renderiza un cuadro de texto de entrada y un botón de "Publicar". 
El estado del componente se maneja utilizando los hooks de estado de React.
El estado "tweet" se inicializa como una cadena vacía y se actualiza en función del valor ingresado en el cuadro de texto de entrada.
El estado "mensajeEnviado" se inicializa como falso y se actualiza cuando se hace clic en el botón "Publicar" s
i la cadena "tweet" no está vacía. Luego, después de 2 segundos, se establece de nuevo en falso.
El estado "textoVacio" se inicializa como verdadero y se actualiza en función de si la cadena "tweet" está vacía o no.
Finalmente, el componente renderiza un "Box" que contiene un "Input" para el cuadro de texto de entrada y un "Button" para enviar el tweet. 
El botón se desactiva si la cadena "tweet" está vacía utilizando el estado "textoVacio". 
Si el tweet se envía con éxito, se muestra un mensaje de confirmación en la parte inferior del "Box" utilizando el estado "mensajeEnviado".*/