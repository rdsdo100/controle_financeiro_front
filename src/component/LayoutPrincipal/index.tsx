import React from 'react';
import Carregamento from '../Carregamento';
import Menu from '../Menu';
import { BodyLayout, Container, HeadLayout , H1}  from './styles'

interface ILayoutPrincipal {
  titulo: string
  displayCarregamento?: string
}

const LayoutPrincipal: React.FC <ILayoutPrincipal> = ({children, titulo ,  displayCarregamento = "none"}) => {
  return(
<div>
 <Carregamento
 displayCarregamento = {displayCarregamento}
 />
      <Container>
        <HeadLayout>
          <Menu></Menu>
          <H1>{titulo}</H1>
          
          <div>
            <H1 style={{margin: '0 15px' ,fontSize: '8pt', color: '#bebebe'}}>Bem vindo!</H1>
          <h3 style={{margin: '0 15px' , color: '#bfbfbf'}}>{String(localStorage.getItem('login'))}</h3>
          </div>
        </HeadLayout>
        <BodyLayout>
        {children}
        </BodyLayout>
      </Container>
      </div>
  )

};

export default LayoutPrincipal;