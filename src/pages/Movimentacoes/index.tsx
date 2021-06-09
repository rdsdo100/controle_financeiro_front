import React, { useEffect, useState } from 'react'
import CardBuscaComponent from '../../component/cards/CardBuscaComponent'
import CardsMovimentacoes from '../../component/cards/CardsMovimentacoes'
import LayoutPrincipal from '../../component/LayoutPrincipal'
import MessageBoxComponent from '../../component/MessageBoxComponent'
import EditMovimentacoes from '../../component/telasEdits/EditMovimentacoes'
import { api } from '../../services/api'
import { DivEditMovimentacoes, ItemLista, Lista } from './styles'

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
    const [monimentacoes, setMonimentacoes] = useState<IMovimentacoes[]>([])





    
    function buscarObjetivos() {
        setCarregar("")

        api.get('movimentacoes/busca-user',
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data
                setMonimentacoes(resposta)

                setCarregar("none")
            })
            .catch(erro => {
                alert('Erro ao acessar servidor!')

            })
    }



    useEffect(() => {
        buscarObjetivos()
    }, [])


    async function buscarmovimentacoes() {
        buscarObjetivos()
    }

    function clickEditMovimentacoes(id: number){
        setTelaVisivel("")
        console.log(`Clicou Edity ${id} !`)
    }

    function clickDeleteMovimentacoes(id: number){
        console.log(`Clicou Delete ${id} !`)
        
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


< div style={{ display: telaVisivelMessage }} >
                <MessageBoxComponent
                    telaWidth={"40%"}
                    telaHeight={"40%"}
                    fechar={fecharMessage}
                >
                    {message}

                </MessageBoxComponent>
            </div>


            <DivEditMovimentacoes style={{ display: telaVisivel }}>
                <EditMovimentacoes
                    fechar={() => { setTelaVisivel("none") }} 
                    carregamento = {(carregar: string)=>{setCarregar(carregar)}}
                    telaMessagem = {carregarMessage}
                    
                    />

            </DivEditMovimentacoes>

            <CardBuscaComponent clickBusca={buscarmovimentacoes} clickNovo={() => { setTelaVisivel("") }} >

                <Lista>
                    {monimentacoes.map((item: IMovimentacoes) => {

                        return <ItemLista key={item.id}>
                            <CardsMovimentacoes

                                id={item.id}
                                nomeMovimentacoes={item.nomeMovimentacoes}
                                idDeleteAtendimentos={clickDeleteMovimentacoes}
                                idEditAtendimentos={clickEditMovimentacoes}
                            ></CardsMovimentacoes>
                        </ItemLista>

                    })}
                </Lista>


            </CardBuscaComponent>


        </LayoutPrincipal>



    )
}
export default Movimentacoes
