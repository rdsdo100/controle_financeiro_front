import React from 'react';
import { Card ,CardBuscaComponent  }  from './styles'



const CardBusca: React.FC = ({children}) => {
  return(

      
        <Card>
            <CardBuscaComponent>
               {children}
            </CardBuscaComponent>
        </Card>

     
  )

};

export default CardBusca;