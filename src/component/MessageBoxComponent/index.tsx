import React from 'react';
import Button from '../buttons/Button';
import { TelaFlutuante, Component,  BarraSuperior, MdDeleteForeverIcon, FecharTela, DivButton, DivMessage } from './styles'

interface ITela {



  telaWidth?: string
  telaHeight?: string
  readonly fechar: (arg0: string) => void;


}

const MessageBoxComponent: React.FC<ITela> = ({ children,
  telaWidth, telaHeight,
  fechar }) => {

  const buttonFechar = () => {

    fechar("none");
  }


  return (

<DivMessage>
    
    <TelaFlutuante style={{ width: telaWidth, height: telaHeight }}>

      <BarraSuperior >
        <FecharTela onClick={buttonFechar}>
          <MdDeleteForeverIcon />
        </FecharTela>
      </BarraSuperior>

      <Component>
        {children}
      </Component>
      <DivButton>
      <Button style={{background: "green"}} onClick={buttonFechar} >Confirmar</Button>
      </DivButton>
    </TelaFlutuante>
    </DivMessage>
  )

};

export default MessageBoxComponent;