import React, { useState } from 'react';
import { TelaFlutuante, Component, ButtonMessage , BarraSuperior } from './styles'

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

    <TelaFlutuante style={{ display: telaVisivel, width: telaWidth, height: telaHeight }}>
      <BarraSuperior style={{height: telaHeight }} ></BarraSuperior>
      <Component>
        {children}
      </Component>
      <ButtonMessage  style={{background: "#2600ff" ,width: "48%" }} > Editar </ButtonMessage>
      <ButtonMessage onClick={buttonFechar} style={{ width: "48%" }} > Cancelar </ButtonMessage>
    </TelaFlutuante>
  )

};

export default TelasFlutuantes;