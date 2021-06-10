import React, { useEffect, useState } from 'react'
import CardBuscaComponent from '../../component/cards/CardBuscaComponent'
import CardsObjetivosFinanceiro from '../../component/cards/CardsObjetivosFinanceiro'
import LayoutPrincipal from '../../component/LayoutPrincipal'
import EditObjetivosFinanceiro from '../../component/telasEdits/EditObjetivosFinanceiro'

import { api } from '../../services/api'
import { DivEditMovimentacoes, Lista, ItemLista } from '../Movimentacoes/styles'


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

const ObjetivosFinaceiros: React.FC = () => {

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


    function carregarMessage(message: string) {
        setCarregar("none")
        setTelaVisivelMessage("")
        setMessage(message)
    }

    return (

        <LayoutPrincipal displayCarregamento={carregar} titulo="Objetivos Finaceiros" >

            <DivEditMovimentacoes style={{ display: telaVisivel }}>
                <EditObjetivosFinanceiro
                     fechar={() => { setTelaVisivel("none") }} 
                     carregamento = {(carregar: string)=>{setCarregar(carregar)}}
                     telaMessagem = {carregarMessage} />

            </DivEditMovimentacoes>

            <CardBuscaComponent clickBusca={buscarmovimentacoes} clickNovo={() => { setTelaVisivel("") }} >

                <Lista>
                    {monimentacoes.map((item: IMovimentacoes) => {

                        return <ItemLista key={item.id}>
                            <CardsObjetivosFinanceiro

                                id={item.id}
                                nomeMovimentacoes={item.nomeMovimentacoes}
                                idDeleteAtendimentos={() => { }}
                                idEditAtendimentos={() => { }}
                            ></CardsObjetivosFinanceiro>
                        </ItemLista>

                    })}
                </Lista>


            </CardBuscaComponent>

                
        </LayoutPrincipal>



    )

}
export default ObjetivosFinaceiros
