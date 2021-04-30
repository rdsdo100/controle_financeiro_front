import React from 'react';
import { IContas } from '../../../pages/Conta';
import { Container, DivBodyBanco, DivButtons, DivLogoBanco, ImageContaBanco } from './styles';

const CardsBancos: React.FC <IContas> = ({children ,
   id ,
    nomeConta,
     valorLivre,
     valorSeparado,
      bancosIdFK 
    
    }) => {
    
   return (
     <Container>
         
         <DivLogoBanco>

        

           <ImageContaBanco src={ bancosIdFK?.urlImagemBanco} alt="Logo Banco"/>
            </DivLogoBanco>

 <DivBodyBanco> </DivBodyBanco>

 <DivButtons> </DivButtons>






     </Container>
   )
  
  };
  
  export default CardsBancos;