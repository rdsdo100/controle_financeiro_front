import React, { useEffect, useState } from 'react'
import CardBuscaComponent from '../../component/cards/CardBuscaComponent'
import CardsMovimentacoes from './CardsMovimentacoes'
import LayoutPrincipal from '../../component/LayoutPrincipal'
import MessageBoxComponent from '../../component/MessageBoxComponent'
import EditMovimentacoes from './EditMovimentacoes'
import { api } from '../../services/api'
import { DivEditMovimentacoes, ItemLista, Lista } from './styles'

interface IMovimentacoes {
    dataEstorno?: boolean
    dataMovimento?: Date
    descricao?: string
    estorno?: true
    id: number
    nomeMovimentacoes?: string
    tipoEntrada?: boolean
    tipoPoupanca? : boolean
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
    const [listMovimentacoes, setListMovimentacoes] = useState<IMovimentacoes[]>([])
    const [movimentacoes, setMovimentacoes] = useState<IMovimentacoes>()
   
    function buscarObjetivos() {
        setCarregar("")

        api.get('movimentacoes/busca-user',
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data
                setListMovimentacoes(resposta)

                setCarregar("none")
            })
            .catch(erro => {
                setCarregar("none")
                carregarMessage('Erro ao acessar servidor!') 
            })
    }

    useEffect(() => {
        buscarObjetivos()
    }, [movimentacoesAtualizar])

    async function buscarmovimentacoes() {
        buscarObjetivos()
    }

    function clickEditMovimentacoes(id: number){
        setTelaVisivel("")

        let movimentacoesEdit: any = listMovimentacoes.find((item: IMovimentacoes) => item.id == id)
       setMovimentacoes(movimentacoesEdit)

    }

    function clickDeleteMovimentacoes(id: number){
     
        api.delete<string>(`movimentacoes/${id}`,
        { headers: { authorization: auth } })
        .then(response => {
            const resposta: any = response.data

            setMovimentacoesAtualizar(movimentacoesAtualizar + 1)
            setCarregar("")
            carregarMessage(String(`${response.status} - ${resposta}`))

        }).catch(erro => {
          
            carregarMessage('Não enviado!')

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
                    movimentacoes = {movimentacoes}
                    
                    />

            </DivEditMovimentacoes>

            <CardBuscaComponent clickBusca={buscarmovimentacoes} clickNovo={() => { setTelaVisivel("") }} >

                <Lista>
                    {listMovimentacoes.map((item: IMovimentacoes) => {

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
