import React from 'react';
import CardItens from './CardItens';
import CardList from './CardList';


const CardBuscaComponent: React.FC = ({ children}) => {



  return (

<div>
  <CardItens></CardItens>
  <CardList></CardList>
</div>

  )

};

export default CardBuscaComponent;