import React, {memo} from 'react';
import { IContas } from '..';

import {
  ButtonCardBancos, Container,
  DivBodyBanco, DivButtons, DivLogoBanco,
  ImageContaBanco, MdDeleteForeverIcon, MdModeEditIcon,
  Nomes, SubTitulos, Titulos
} from './styles';




interface IContasCard {
  id: number
  corrente: number
  poupanca: number
  valorTotal?: number
  ativo?: boolean
  bloqueado?: boolean
  nomeConta: string
  bancos?: {
      id: number
      nomeBanco?: string
      urlImagemBanco?: string
  }

  readonly idDeleteAtendimentos: (arg0: number) => void;
  readonly idEditAtendimentos: (arg0: number) => void;



}

const CardsBancos: React.FC<IContasCard> = ({ children,
  id,
  nomeConta,
  corrente,
  poupanca,
  valorTotal,
  bancos,
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

      <DivLogoBanco>
        <ImageContaBanco src={bancos?.urlImagemBanco} alt="Logo Banco" />
      </DivLogoBanco>

      <DivBodyBanco>
        <Titulos> {nomeConta}</Titulos>
        <SubTitulos>Valor Total: {valorTotal}</SubTitulos>
        <Nomes>Conta Corrente: {corrente}</Nomes>
        <Nomes>Conta Poupança: {poupanca}</Nomes>

      </DivBodyBanco>

      <DivButtons>

        <ButtonCardBancos type="button" onClick={buttonEditdId}><MdModeEditIcon /></ButtonCardBancos>
        <ButtonCardBancos type="button" onClick={buttonDeleteId} ><MdDeleteForeverIcon /></ButtonCardBancos>

      </DivButtons>

    </Container>
  )

};

export default CardsBancos;