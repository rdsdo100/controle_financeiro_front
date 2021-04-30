import React from 'react';
import { IContas } from '../../../pages/Conta';

import {
  ButtonCardBancos, Container,
  DivBodyBanco, DivButtons, DivLogoBanco,
  ImageContaBanco, MdDeleteForeverIcon, MdModeEditIcon,
  Nomes, SubTitulos, Titulos
} from './styles';

const CardsBancos: React.FC<IContas> = ({ children,
  id,
  nomeConta,
  valorLivre,
  valorSeparado,
  valorTotal,
  bancosIdFK

}) => {

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

        <ButtonCardBancos><MdModeEditIcon /></ButtonCardBancos>
        <ButtonCardBancos><MdDeleteForeverIcon /></ButtonCardBancos>

      </DivButtons>

    </Container>
  )

};

export default CardsBancos;