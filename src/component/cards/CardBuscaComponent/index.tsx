import React from 'react';
import ButtonBusca from '../../buttons/ButtonBusca';
import InputBusca from '../../inputs/InputBusca';
import SelectBusca from '../../inputs/SelectBusca';
import CardFooter from './CardFooter';
import CardHead from './CardHead';
import CardListBody from './CardListBody';
import { Div30, Div40 } from './styles';

const CardBuscaComponent: React.FC = ({ children }) => {

    return (

        <div>
            <CardHead>
               <Div30>
                    <ButtonBusca style={{background: 'blue'}} >Novo</ButtonBusca>
                    </Div30>
                   
                    <Div40>
                    <SelectBusca></SelectBusca>
                    </Div40>

                    <InputBusca>Buscar</InputBusca>
                    
                    <Div30 >

                    <ButtonBusca>Buscar</ButtonBusca>
                    </Div30>
            </CardHead>
            <CardListBody cardListComponentStyle="150px">{children}</CardListBody>
            <CardFooter>
          
            </CardFooter>
        </div>
    )

};

export default CardBuscaComponent;