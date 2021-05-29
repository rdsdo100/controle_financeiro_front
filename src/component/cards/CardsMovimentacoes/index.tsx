import React from 'react';
import { IContas } from '../../../pages/Conta';

import {
  ButtonCardBancos, Container,
  DivBodyBanco, DivButtons,
   MdDeleteForeverIcon, MdModeEditIcon,

} from './styles';




interface IMovimentacoesCard {
  dataEstorno?: boolean
  dataMovimento?: Date
  descricao?: string
  estorno?: true
  id: number
  nomeMovimentacoes?: string
  tipoEntrada?: true
  valorContaAnterior?: number
  valorMovimento?: number

  readonly idDeleteAtendimentos: (arg0: number) => void;
  readonly idEditAtendimentos: (arg0: number) => void;

}

const CardsMovimentacoes: React.FC<IMovimentacoesCard> = ({ children,
  id,
  idDeleteAtendimentos,
  idEditAtendimentos
  

}) => {


  const buttonDeleteId = () => {

    const novoLabel:number = id
    idDeleteAtendimentos(novoLabel);
}
const buttonEditdId = () => {
  
  const novoLabel:number = id
  idEditAtendimentos(novoLabel);
}
  return (
    <Container>

    
      <DivBodyBanco>
       {id}

      </DivBodyBanco>

      <DivButtons>

        <ButtonCardBancos type="button" onClick={buttonEditdId}><MdModeEditIcon /></ButtonCardBancos>
        <ButtonCardBancos type="button" onClick={buttonDeleteId} ><MdDeleteForeverIcon /></ButtonCardBancos>

      </DivButtons>

    </Container>
  )

};

export default CardsMovimentacoes;