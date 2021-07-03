import React, { memo } from 'react';
import { H1 } from '../../../component/LayoutPrincipal/styles';
import { ButtonCardBancos } from '../../Conta/CardsBancos/styles';

import { Container, DivBanco,  DivButtons, DivData, DivDescricao, DivImage, DivNome, DivValor, MdDeleteForeverIcon, MdModeEditIcon } from './styles';

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
  nomeMovimentacoes,
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




<DivImage></DivImage>


<DivNome>
          
<H1>{`${id} - ${nomeMovimentacoes}  `}</H1>

</DivNome>


<DivDescricao></DivDescricao>


<DivValor></DivValor>


<DivData></DivData>


<DivBanco></DivBanco>



<DivButtons>

<ButtonCardBancos type="button" onClick={buttonEditdId}><MdModeEditIcon /></ButtonCardBancos>
        <ButtonCardBancos type="button" onClick={buttonDeleteId} ><MdDeleteForeverIcon /></ButtonCardBancos>
        </DivButtons>
    



    

     


    </Container>
  )

};

export default memo(CardsMovimentacoes);





