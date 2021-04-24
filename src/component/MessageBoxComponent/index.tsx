import React from 'react';
import { MessageBox ,Component , ButtonMessage } from './styles'




const MessageBoxComponent: React.FC = ({children}) => {

 
 

  return (

    <MessageBox style={{display: ""}}> 
      <Component>
        {children}
        </Component> 
        <ButtonMessage>
       ok
          </ButtonMessage>
    </MessageBox>
  )

};

export default MessageBoxComponent;