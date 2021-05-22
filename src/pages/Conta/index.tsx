import React, { ChangeEvent, useEffect, useState } from 'react'
import Button from '../../component/buttons/Button'
import CardsBancos from '../../component/cards/CardsBancos'
import InputCadastro from '../../component/inputs/InputCadastro'
import Select from '../../component/inputs/Select'
import LayoutPrincipal from '../../component/LayoutPrincipal'
import MessageBoxComponent from '../../component/MessageBoxComponent'
import { CardListTab, Tab, Tabs } from '../../component/TabsComponents'
import CardRegisterTab from '../../component/TabsComponents/CardRegisterTab'
import EditContas from '../../component/telasEdits/EditContas'
import { api } from '../../services/api'
import { DivBancos, DivSelect, DivImage, ImageBanco } from './styles'

export interface IContas {
    id?: number
    corrente: number
    poupanca: number
    valorTotal?: number
    ativo?: boolean
    bloqueado?: boolean
    nomeConta: string
    usuariosIdFK?: {
        id: number

    }
    bancosIdFK?: {
        id: number
        nomeBanco?: string
        urlImagemBanco?: string
    }
}

export interface IBancos {

    id: number
    nomeBanco: string
    urlImagemBanco: string
}


export interface IContaEdit {
    id: number
    corrente: number
    poupanca: number
    ativo: boolean
    bloqueado: boolean
    nomeConta: string
    usuariosIdFK: number
    bancosIdFK: number
}

const Conta: React.FC = () => {

    const [telaVisivel, setTelaVisivel] = useState<string>("none")
    const [telaVisivelMessage, setTelaVisivelMessage] = useState<string>("none")
    const [message, setMessage] = useState<string>(" ")
    const [listContas, setListContas] = useState<IContas[]>([])
    const [contaEdit, setContaEdit] = useState<IContaEdit>()
    const [listBancos, setListBancos] = useState<IBancos[]>([])
    const [bancos, setBancos] = useState<IBancos>()
    const [retornoConta, setRetornoConta] = useState<IContas>()
    const [idBanco, setIdBanco] = useState<number>()
    const [nomeConta, setNomeConta] = useState<string>()
    const [corrente, setCorrente] = useState<number>()
    const [poupanca, setPoupanca] = useState<number>()
    const auth = localStorage.getItem('Authorization')
    const [contaAtualizar, setContaAtualizar] = useState<number>(0)

    useEffect(() => {

        setBancos({
            id: 0,
            nomeBanco: "sembanco",
            urlImagemBanco: "https://controle-finaceiro-back.herokuapp.com/sembanco.png"
        })
    }, [])

    useEffect(() => {

        api.get('conta',
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data
                setListContas(resposta)

            })
            .catch(erro => {
                alert('Erro ao acessar servidor!')

            })

    }, [contaAtualizar])

    useEffect(() => {

        api.get('banco',
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data
                setListBancos(resposta)
            })
            .catch(erro => {
                alert('Erro ao acessar servidor!')

            })

    }, [])

    function handleSelectChangeBancos(event: ChangeEvent<HTMLSelectElement>) {
        const { value } = event.target

        if (Number(value) !== 0) {
            setBancos(listBancos.find((item: IBancos) => item.id == Number(value)))
            setIdBanco(Number(value))
        } else {
            setIdBanco(Number(0))
            setBancos(
                {
                    id: 0,
                    nomeBanco: "sembanco",
                    urlImagemBanco: "https://controle-finaceiro-back.herokuapp.com/sembanco.png"
                }
            )
        }
    }

    function handleInputChangeNomeConta(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target
        setNomeConta(String(value))
    }
    function handleInputChangePoupanca(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target
        setPoupanca(Number(value))
    }
    function handleInputChangeCorrente(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target
        setCorrente(Number(value))
    }

    function clicRegisterBancos() {
        let conta: IContas = {

            nomeConta: String(nomeConta),
            corrente: Number(corrente),
            poupanca: Number(poupanca),
            bancosIdFK: {
                id: Number(idBanco)
            }

        }

        api.post<IContas>('conta', conta,
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data
                setRetornoConta(resposta)

                setContaAtualizar(contaAtualizar + 1)
                carregarMessage('Salvo!')

            }).catch(erro => {
                console.log(erro)
                carregarMessage('Não enviado!')

            })
    }

    function editiContas(id: number) {

        setTelaVisivel("")
        let contaEditRetorno: IContaEdit

        let conta: any = listContas.find((item: IContas) => item.id == id)

        contaEditRetorno = {
            id: Number(conta.id),
            corrente: Number(conta.corrente),
            poupanca: Number(conta.poupanca),
            ativo: Boolean(conta.ativo),
            bloqueado: Boolean(conta.bloqueado),
            nomeConta: String(conta.nomeConta),
            usuariosIdFK: Number(conta.usuariosIdFK.id),
            bancosIdFK: Number(conta.bancosIdFK.id)

        }

        setContaEdit(contaEditRetorno)

    }

    function handleDeleteBancos(idDelete: number) {

        api.delete<IContas>(`conta/${idDelete}`,
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data

                console.log(resposta)
                setContaAtualizar(contaAtualizar + 1)
                carregarMessage(String(resposta))

            }).catch(erro => {
                console.log(erro)
                carregarMessage('Não enviado!')

            })

    }

    function carregarMessage(message: string) {
        setTelaVisivelMessage("")
        setMessage(message)
    }
    function fecharMessage(fechar : string) {
        setTelaVisivelMessage(fechar)
     }

    return (
        <LayoutPrincipal titulo="Conta" >

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
                    text='Lista de contas'
                    IdNameTab="tabListConta"
                    defaultCheckedTab  >
                    <CardListTab>


                        {
                            listContas.map((conta: any) => {

                                return <CardsBancos
                                    key={conta?.id}
                                    id={conta.id}
                                    nomeConta={conta?.nomeConta}
                                    corrente={conta?.corrente}
                                    poupanca={conta?.poupanca}
                                    bancosIdFK={conta?.bancosIdFK}
                                    valorTotal={conta?.valorTotal}
                                    idDeleteAtendimentos={handleDeleteBancos}
                                    idEditAtendimentos={editiContas}

                                >
                                </CardsBancos>
                            })}

                        
                        < div style={{ display: telaVisivel }} >
                            <EditContas
                                id={contaEdit?.id}
                                corrente={contaEdit?.corrente}
                                poupanca={contaEdit?.poupanca}
                                ativo={contaEdit?.ativo}
                                bloqueado={contaEdit?.bloqueado}
                                nomeConta={contaEdit?.nomeConta}
                                contaAtualizar={contaAtualizar}
                                retornoEdit={(item: number) => { setContaAtualizar(item) }}
                                fechar={() => { setTelaVisivel("none") }}></EditContas>
                        </ div>

                    </CardListTab>
                </Tabs>

                <Tabs
                    text='Cadastro'
                    IdNameTab="tabRegisterConta"
                >
                    <CardRegisterTab>

                        <DivBancos>
                            <DivSelect>
                                <Select
                                    onChange={handleSelectChangeBancos}
                                    id="empresasSelectAtendimentos" >

                                    <option key={0} value='0'>Seleciona a Banco!</option>
                                    {listBancos.map((banco: IBancos) => {
                                        return <option key={banco.id} value={banco.id}> {banco.nomeBanco}</option>
                                    })}

                                </Select>
                                <InputCadastro
                                    id='nomeConta'
                                    name="nomeConta"
                                    onChange={handleInputChangeNomeConta}

                                >Nome da Conta</InputCadastro>

                                <InputCadastro
                                    id='ValorLivre'
                                    name="ValorLivre"

                                    onChange={handleInputChangeCorrente}
                                >Valor Livre</InputCadastro>

                                <InputCadastro
                                    id="ValorSeparado"
                                    name="ValorSeparado"
                                    onChange={handleInputChangePoupanca}
                                >Valor Separado</InputCadastro>

                            </DivSelect>

                            <DivImage>
                                <ImageBanco src={bancos?.urlImagemBanco} alt="Logo Banco" ></ImageBanco>
                            </DivImage>
                        </DivBancos>

                        <Button onClick={() => { clicRegisterBancos() }}>Cadstrar</Button>
                    </CardRegisterTab>

                </Tabs>
            </Tab>


        </LayoutPrincipal>

    )
}
export default Conta
