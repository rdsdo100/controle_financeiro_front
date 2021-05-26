import React, { useState } from 'react'
import CardBuscaComponent from '../../component/cards/CardBuscaComponent'
import LayoutPrincipal from '../../component/LayoutPrincipal'
import MessageBoxComponent from '../../component/MessageBoxComponent'
import { Tab, Tabs } from '../../component/TabsComponents'

const Movimentacoes: React.FC = () => {

    const [telaVisivel, setTelaVisivel] = useState<string>("none")
    const [telaVisivelMessage, setTelaVisivelMessage] = useState<string>("none")
    const [message, setMessage] = useState<string>(" ")
    const auth = localStorage.getItem('Authorization')
    const [movimentacoesAtualizar, setMovimentacoesAtualizar] = useState<number>(0)
    const [carregar, setCarregar] = useState<string>("none")


    function carregarMessage(message: string) {
        setCarregar("none")
        setTelaVisivelMessage("")
        setMessage(message)
    }
    function fecharMessage(fechar: string) {
        setTelaVisivelMessage(fechar)
    }

    return (

<LayoutPrincipal displayCarregamento={carregar} titulo="Movimentacões" >

< div style={{ display: telaVisivelMessage }} >
    <MessageBoxComponent
        telaWidth={"40%"}
        telaHeight={"40%"}
        fechar={fecharMessage}
    >
        {message}

    </MessageBoxComponent>
</div>

<Tab>

    <Tabs
        text='Lista de Movimentacoes'
        IdNameTab="tabListMovimentacoes"
        defaultCheckedTab  >

<CardBuscaComponent></CardBuscaComponent>

        </Tabs>





    <Tabs
        text='Cadastro Movimentacoes'
        IdNameTab="tabRegisterMovimentacoes"
    >
       

    </Tabs>
</Tab>


</LayoutPrincipal>



    )
}
export default Movimentacoes
