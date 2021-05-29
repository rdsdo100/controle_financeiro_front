import React, { useState } from 'react'
import CardBuscaComponent from '../../component/cards/CardBuscaComponent'
import CardsMovimentacoes from '../../component/cards/CardsMovimentacoes'
import LayoutPrincipal from '../../component/LayoutPrincipal'
import MessageBoxComponent from '../../component/MessageBoxComponent'
import { api } from '../../services/api'

interface IMovimentacoes {
    dataEstorno?: boolean
    dataMovimento?: Date
    descricao?: string
    estorno?: true
    id: number
    nomeMovimentacoes?: string
    tipoEntrada?: true
    valorContaAnterior?: number
    valorMovimento?: number
  }

const Movimentacoes: React.FC = () => {

    const [telasMovimentacoes, setTelasMovimentacoes] = useState<string>("")
    const [telaVisivel, setTelaVisivel] = useState<string>("none")
    const [telaVisivelMessage, setTelaVisivelMessage] = useState<string>("none")
    const [message, setMessage] = useState<string>(" ")
    const auth = localStorage.getItem('Authorization')
    const [movimentacoesAtualizar, setMovimentacoesAtualizar] = useState<number>(0)
    const [carregar, setCarregar] = useState<string>("none")
    const [monimentacoes , setMonimentacoes ] = useState<IMovimentacoes[]>([])

    async function buscarmovimentacoes(){

        setCarregar("")

        api.get('movimentacoes/busca-user',
        { headers: { authorization: auth } })
        .then(response => {
            const resposta: any = response.data
            setMonimentacoes(resposta)

            setCarregar("none")
            carregarMessage("Buscou")

        })
        .catch(erro => {
            alert('Erro ao acessar servidor!')

        })


    }

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

{/*<TelasMovimentacoes></TelasMovimentacoes>*/}


< div style={{ display: telaVisivelMessage }} >
    <MessageBoxComponent
        telaWidth={"40%"}
        telaHeight={"40%"}
        fechar={fecharMessage}
    >
        {message}

    </MessageBoxComponent>
</div>


<CardBuscaComponent clickBusca ={buscarmovimentacoes}>



{monimentacoes.map((item : IMovimentacoes)=>{

return <CardsMovimentacoes 

id={ item.id}
  idDeleteAtendimentos = {()=>{}} 
  idEditAtendimentos = {()=>{}}
></CardsMovimentacoes>

})}


</CardBuscaComponent>

       







</LayoutPrincipal>



    )
}
export default Movimentacoes
