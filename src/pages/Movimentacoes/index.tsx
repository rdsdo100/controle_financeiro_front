import React, { useEffect, useState } from 'react'
import CardBuscaComponent from '../../component/cards/CardBuscaComponent'
import CardsMovimentacoes from '../../component/cards/CardsMovimentacoes'
import LayoutPrincipal from '../../component/LayoutPrincipal'
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

    return (

        <LayoutPrincipal displayCarregamento={carregar} titulo="Movimentacões" >

            <DivEditMovimentacoes style={{ display: telaVisivel }}>
                <EditMovimentacoes
                    fechar={() => { setTelaVisivel("none") }} />

            </DivEditMovimentacoes>

            <CardBuscaComponent clickBusca={buscarmovimentacoes} clickNovo={() => { setTelaVisivel("") }} >

                <Lista>
                    {monimentacoes.map((item: IMovimentacoes) => {

                        return <ItemLista key={item.id}>
                            <CardsMovimentacoes

                                id={item.id}
                                nomeMovimentacoes={item.nomeMovimentacoes}
                                idDeleteAtendimentos={() => { }}
                                idEditAtendimentos={() => { }}
                            ></CardsMovimentacoes>
                        </ItemLista>

                    })}
                </Lista>


            </CardBuscaComponent>


        </LayoutPrincipal>



    )
}
export default Movimentacoes
