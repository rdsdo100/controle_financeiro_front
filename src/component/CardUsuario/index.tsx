import React from 'react';
import { Button, Container,ContainerInfo , ContainerButtons, LI, MdDeleteForeverIcon, MdModeEditIcon } from './styles'



interface IUduario {

  id: number
  nomeUsuario?: string,
  email?: string,
  matricula?: string,
  ativo?: boolean,
  bloqueado?: boolean,
  grupoUsuariosId?: number
  grupoUsuariosNome?: string
  readonly idEditUsuario: (arg0: number) => void;

}




const CardUsuario: React.FC<IUduario> = ({ id, nomeUsuario, matricula,  idEditUsuario }) => {


  
  const buttonEditdId = () => {

    const novoLabel: number = id
    idEditUsuario(novoLabel);
  }

  return (

    <Container>
      <LI>
        <ContainerInfo>
          <p>{id}</p>
          <p>{nomeUsuario}</p>
          <p>{matricula}</p>

        </ContainerInfo>
        <ContainerButtons>
          <Button type="button" onClick={buttonEditdId}><MdModeEditIcon /></Button>
        </ContainerButtons>


      </LI>

    </Container>
  )

};

export default CardUsuario;