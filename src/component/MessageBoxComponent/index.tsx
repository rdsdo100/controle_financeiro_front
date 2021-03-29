import React from 'react';
import { MessageBox } from './styles'




const MessageBoxComponent: React.FC = ({children}) => {

 
 

  return (

    <MessageBox style={{display: ""}}>
         
         

        {children}
           
    </MessageBox>
  )

};

export default MessageBoxComponent;