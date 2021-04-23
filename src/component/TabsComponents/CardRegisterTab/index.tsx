import React from 'react';
import { Card ,CardListComponent  }  from './styles'



const CardRegisterTab: React.FC = ({children}) => {
  return(

      
        <Card>
            <CardListComponent>
               {children}
            </CardListComponent>
        </Card>

     
  )

};

export default CardRegisterTab;