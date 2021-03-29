import React from 'react';
import { Container, LI, Header, ContainerButtons,
   ContainerInfo, MdDeleteForeverIcon, MdModeEditIcon, Button } from './styles'



interface IAtendimentosCards {
  id: number
  descricaoAtendimento?: string
  dataAtendimento?: Date
  cogigoEmpresa?: string
  nomeEmpresa: string
  readonly idDeleteEmpresas: (arg0: number) => void;
  readonly idEditEmpresas: (arg0: number) => void;

    
  
}

const CardListEmpresas: React.FC<IAtendimentosCards> = ({
  id,
  cogigoEmpresa,
  nomeEmpresa,
  idDeleteEmpresas,
  idEditEmpresas
  

}) => {

 
  const buttonDeleteId = () => {

    const novoLabel:number = id
    idDeleteEmpresas(novoLabel);
}
const buttonEditdId = () => {
  
  const novoLabel:number = id
  idEditEmpresas(novoLabel);
}



  return (

    <Container>
      <LI>

        <ContainerInfo>
          <Header>{`${cogigoEmpresa} - ${nomeEmpresa}`}</Header>
        
        </ContainerInfo>
        <ContainerButtons>
          <Button type="button" onClick={buttonEditdId}><MdModeEditIcon/></Button>
          <Button type="button" onClick={buttonDeleteId} ><MdDeleteForeverIcon /></Button>
        </ContainerButtons>
      </LI>

    </Container>
  )

};

export default CardListEmpresas;