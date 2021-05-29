import React from 'react';
import ButtonBusca from '../../buttons/ButtonBusca';
import InputBusca from '../../inputs/InputBusca';
import SelectBusca from '../../inputs/SelectBusca';
import CardFooter from './CardFooter';
import CardHead from './CardHead';
import CardListBody from './CardListBody';
import { Div30, Div40 } from './styles';


interface IMovimentacoes {
    readonly clickBusca: () => void;

}

const CardBuscaComponent: React.FC <IMovimentacoes> = ({ children ,clickBusca }) => {




    const buttonDeleteId = () => {

        clickBusca()       
    }

    return (

        <div>
            <CardHead>
               <Div30>
                    <ButtonBusca  style={{background: 'blue'}} >Novo</ButtonBusca>
                    </Div30>
                   
                    <Div40>
                    <SelectBusca>
                        <option value="data">Data</option>
                        <option value="BancoId">Banco ID</option>
                        <option value="nomeBanco">Nome Banco</option>
                        <option value="tipo">Tipo</option>
                    </SelectBusca>
                    </Div40>

                    <InputBusca>Buscar</InputBusca>
                    
                    <Div30 >

                    <ButtonBusca onClick={buttonDeleteId} >Buscar</ButtonBusca>
                    </Div30>
            </CardHead>
            <CardListBody cardListComponentStyle="150px">{children}</CardListBody>
            <CardFooter>
          
            </CardFooter>
        </div>
    )

};

export default CardBuscaComponent;