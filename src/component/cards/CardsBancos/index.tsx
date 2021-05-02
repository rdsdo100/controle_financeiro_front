import React from 'react';
import { IContas } from '../../../pages/Conta';

import {
  ButtonCardBancos, Container,
  DivBodyBanco, DivButtons, DivLogoBanco,
  ImageContaBanco, MdDeleteForeverIcon, MdModeEditIcon,
  Nomes, SubTitulos, Titulos
} from './styles';




interface IContasCard {
  id: number
  valorLivre: number
  valorSeparado: number
  valorTotal?: number
  ativo?: boolean
  bloqueado?: boolean
  nomeConta: string
  usuariosIdFK?: {
      id: number
     
  }
  bancosIdFK?: {
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
  valorLivre,
  valorSeparado,
  valorTotal,
  bancosIdFK,
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
        <ImageContaBanco src={bancosIdFK?.urlImagemBanco} alt="Logo Banco" />
      </DivLogoBanco>

      <DivBodyBanco>
        <Titulos> {nomeConta}</Titulos>
        <SubTitulos>Valor Total: {valorTotal}</SubTitulos>
        <Nomes>Valor livre: {valorLivre}</Nomes>
        <Nomes>Valor separado: {valorSeparado}</Nomes>

      </DivBodyBanco>

      <DivButtons>

        <ButtonCardBancos type="button" onClick={buttonEditdId}><MdModeEditIcon /></ButtonCardBancos>
        <ButtonCardBancos type="button" onClick={buttonDeleteId} ><MdDeleteForeverIcon /></ButtonCardBancos>

      </DivButtons>

    </Container>
  )

};

export default CardsBancos;