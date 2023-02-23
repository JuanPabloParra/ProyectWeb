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
  
