import React from 'react';
import { Avatar } from '@chakra-ui/react';

function ProfileCircle(props) {
    return (
      <Avatar
        size="sm"
        name={props.userName}
        src="https://bit.ly/dan-abramov"
      />
    );
  }
  
  export default ProfileCircle;
  /*Dentro del componente ProfileCircle, se utiliza el componente Avatar para mostrar un avatar circular. 
  La propiedad size establece el tamaño del avatar en "sm" (pequeño), 
  y la propiedad name establece el nombre que se mostrará en el avatar. También se incluye una imagen de ejemplo mediante la propiedad src.
  Este componente utiliza props para recibir el nombre de usuario que se mostrará en el avatar. 
  Se espera que el nombre de usuario se proporcione a través de la propiedad userName.
  Finalmente, se exporta el componente ProfileCircle para que pueda ser utilizado en otros archivos de la aplicación.*/