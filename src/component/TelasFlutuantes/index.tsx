import React, { useState } from 'react';
import { MessageBox, Component, ButtonMessage } from './styles'

interface ITela {


  telaVisivel: string
  telaWidth?: string
  telaHeight?: string
  readonly fechar: (arg0: string) => void;

}


const TelasFlutuantes: React.FC<ITela> = ({ children,
  telaVisivel, telaWidth, telaHeight,
  fechar }) => {


  const buttonFechar = () => {

    fechar("");
  }





  return (

    <MessageBox style={{ display: telaVisivel, width: telaWidth, height: telaHeight }}>
      <Component>
        {children}
      </Component>
      <ButtonMessage  style={{background: "#2600ff" ,width: "48%" }} > Editar </ButtonMessage>
      <ButtonMessage onClick={buttonFechar} style={{ width: "48%" }} > Cancelar </ButtonMessage>
    </MessageBox>
  )

};

export default TelasFlutuantes;