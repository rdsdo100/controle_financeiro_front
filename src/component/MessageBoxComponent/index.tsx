import React from 'react';
import { MessageBox ,Component } from './styles'




const MessageBoxComponent: React.FC = ({children}) => {

 
 

  return (

    <MessageBox style={{display: ""}}>
         
      <Component>

        {children}
        </Component>   
    </MessageBox>
  )

};

export default MessageBoxComponent;