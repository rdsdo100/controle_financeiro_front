import React from 'react';
import { Card ,CardListComponent  }  from './styles'



const CardListTab: React.FC = ({children}) => {
  return(

      
        <Card>
            <CardListComponent>
               {children}
            </CardListComponent>
        </Card>

     
  )

};

export default CardListTab;