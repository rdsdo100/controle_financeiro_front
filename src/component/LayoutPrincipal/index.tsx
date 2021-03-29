import React from 'react';
import Menu from '../Menu';
import { BodyLayout, Container, HeadLayout , H1}  from './styles'

interface ILayoutPrincipal {
  titulo: string
}

const LayoutPrincipal: React.FC <ILayoutPrincipal> = ({children, titulo}) => {
  return(

      <Container>
        <HeadLayout>
          <Menu></Menu>
          <H1>{titulo}</H1>
          
          <div>
            <h4 style={{margin: '0 15px' ,fontSize: '8pt', color: '#bfbfbf'}}>Bem vindo!</h4>
          <h3 style={{margin: '0 15px' , color: '#bfbfbf'}}>{String(localStorage.getItem('login'))}</h3>
          </div>
        </HeadLayout>
        <BodyLayout>
        {children}
        </BodyLayout>
      </Container>
  )

};

export default LayoutPrincipal;