import { Button } from '@chakra-ui/react';

//@chakra-ui/react es una biblioteca de componentes de interfaz de usuario para React que 
//proporciona una amplia variedad de componentes preconstruidos que se pueden utilizar en aplicaciones web.
//Dentro del componente MyComponent, se utiliza el componente Button para mostrar un botón con el texto "Click me". 
//La propiedad colorScheme establece el color del botón en azul.
//Finalmente, se exporta el componente MyComponent para que pueda ser utilizado en otros archivos de la aplicación.

function MyComponent() {
  return (
    <Button colorScheme="blue">Click me</Button>
  );
}

export default MyComponent;
