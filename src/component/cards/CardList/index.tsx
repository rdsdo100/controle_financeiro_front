import React from 'react';
import { Card ,CardListComponent  }  from './styles'



const CardList: React.FC = ({children}) => {
  return(

      
        <Card>
            <CardListComponent>
               {children}
            </CardListComponent>
        </Card>

     
  )

};

export default CardList;