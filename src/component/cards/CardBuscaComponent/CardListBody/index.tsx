import React from 'react';
import { Card ,CardListComponent  }  from './styles'

interface IStyle {

  cardListComponentStyle?: string
}

const CardListBody: React.FC <IStyle> = ({children , cardListComponentStyle = "135px"}) => {
  
  return(

      
  
        <Card>
            <CardListComponent style ={{height: `calc(100vh - ${cardListComponentStyle})`}}>
               {children}
            </CardListComponent>
        </Card>

     
  )

};

export default CardListBody;