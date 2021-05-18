import React from 'react'
import Button from '../../component/buttons/Button'
import CardBusca from '../../component/cards/CardBusca'
import CardList from '../../component/cards/CardList'
import Select from '../../component/inputs/Select'
import LayoutPrincipal from '../../component/LayoutPrincipal'
import { Input } from '../Login/styles'

const Movimentacoes: React.FC = () => {
   
    return (
        <LayoutPrincipal titulo="Movimentacões" >
<CardBusca>
    <Select></Select>
    <Input></Input>
<Button>Pesquisar</Button>
</CardBusca>
<CardList></CardList>


        </LayoutPrincipal>

    )
}
export default Movimentacoes
