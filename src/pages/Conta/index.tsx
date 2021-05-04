import React, { ChangeEvent, useEffect, useState } from 'react'
import Button from '../../component/buttons/Button'
import CardsBancos from '../../component/cards/CardsBancos'
import InputCadastro from '../../component/inputs/InputCadastro'
import Select from '../../component/inputs/Select'
import Toggle from '../../component/inputs/Toggle'
import LayoutPrincipal from '../../component/LayoutPrincipal'
import { CardListTab, Tab, Tabs } from '../../component/TabsComponents'
import CardRegisterTab from '../../component/TabsComponents/CardRegisterTab'
import TelasFlutuantes from '../../component/TelasFlutuantes'
import { api } from '../../services/api'
import { DivBancos, DivSelect, DivImage, ImageBanco, DivLinhaConta, Div30Conta, Div70Conta } from './styles'



export interface IContas {

    id?: number
    valorLivre: number
    valorSeparado: number
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

const Conta: React.FC = () => {


    const [telaVisivel, setTelaVisivel] = useState<string>("")
    const [listContas, setListContas] = useState<IContas[]>([])
    const [listBancos, setListBancos] = useState<IBancos[]>([])
    const [bancos, setBancos] = useState<IBancos>()
    const [retornoConta, setRetornoConta] = useState<IContas>()
    const [idBanco, setIdBanco] = useState<number>()
    const [nomeConta, setNomeConta] = useState<string>("none")
    const [valorLivre, setValorLivre] = useState<number>()
    const [valorSeparado, setValorSeparado] = useState<number>()
    const auth = localStorage.getItem('Authorization')

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

    }, [])

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

    function habdleSelectChangeBancos(event: ChangeEvent<HTMLSelectElement>) {
        const { name, value } = event.target

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

    function habdleInputChangeNomeConta(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target
        setNomeConta(String(value))
    }
    function habdleInputChangeValorSeparado(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target
        setValorSeparado(Number(value))
    }
    function habdleInputChangeValorLivre(event: ChangeEvent<HTMLInputElement>) {
        const { value } = event.target
        setValorLivre(Number(value))
    }



    function clicRegisterBancos() {
        let conta: IContas = {
            nomeConta: String(nomeConta),
            valorLivre: Number(valorLivre),
            valorSeparado: Number(valorSeparado),
            bancosIdFK: {
                id: Number(idBanco)
            }

        }

        api.post<IContas>('conta', conta,
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data
                setRetornoConta(resposta)
                alert('Salvo!')

            }).catch(erro => {

                alert('Não enviado!')

            })

    }

    return (
        <LayoutPrincipal titulo="Conta" >

            <Tab>
                <Tabs
                    text='Cadastro'
                    IdNameTab="tabRegisterConta"
                    defaultCheckedTab    >
                    <CardRegisterTab>

                        <DivBancos>
                            <DivSelect>
                                <Select
                                    onChange={habdleSelectChangeBancos}
                                    id="empresasSelectAtendimentos" >

                                    <option key={0} value='0'>Seleciona a Banco!</option>
                                    {listBancos.map((banco: IBancos) => {
                                        return <option key={banco.id} value={banco.id}> {banco.nomeBanco}</option>
                                    })}

                                </Select>
                                <InputCadastro
                                    id='nomeConta'
                                    name="nomeConta"
                                    onChange={habdleInputChangeNomeConta}

                                >Nome da Conta</InputCadastro>

                                <InputCadastro
                                    id='ValorLivre'
                                    name="ValorLivre"

                                    onChange={habdleInputChangeValorLivre}
                                >Valor Livre</InputCadastro>

                                <InputCadastro
                                    id="ValorSeparado"
                                    name="ValorSeparado"
                                    onChange={habdleInputChangeValorSeparado}
                                >Valor Separado</InputCadastro>

                            </DivSelect>

                            <DivImage>
                                <ImageBanco src={bancos?.urlImagemBanco} alt="Logo Banco" ></ImageBanco>
                            </DivImage>
                        </DivBancos>

                        <Button onClick={() => { clicRegisterBancos() }}>Cadstrar</Button>
                    </CardRegisterTab>

                </Tabs>

                <Tabs
                    text='Lista de contas'
                    IdNameTab="tabListConta" >
                    <CardListTab>
                        {
                            listContas.map((conta: IContas) => {

                                return <CardsBancos
                                    key={conta?.id}
                                    id={0}
                                    nomeConta={conta?.nomeConta}
                                    valorLivre={conta?.valorLivre}
                                    valorSeparado={conta?.valorSeparado}
                                    bancosIdFK={conta?.bancosIdFK}
                                    valorTotal={conta?.valorTotal}
                                    idDeleteAtendimentos={() => { setTelaVisivel('') }}
                                    idEditAtendimentos={() => { setTelaVisivel('') }}

                                >
                                </CardsBancos>
                            })}

                        <TelasFlutuantes
                            telaVisivel={telaVisivel}
                            telaHeight="70%"
                            telaWidth="80%"
                            fechar={() => { setTelaVisivel('none') }}
                        >
                            <DivLinhaConta>


                                <Div30Conta>
                                    <InputCadastro
                                        id='id'
                                        name="id"
                                    >Id</InputCadastro>
                                </Div30Conta>
                                <Div70Conta>

                                    <Select
                                        onChange={habdleSelectChangeBancos}
                                        id="empresasSelectAtendimentos" >

                                        <option key={0} value='0'>Seleciona a Banco!</option>
                                        {listBancos.map((banco: IBancos) => {
                                            return <option key={banco.id} value={banco.id}> {banco.nomeBanco}</option>
                                        })}

                                    </Select>

                                </Div70Conta>
                            </DivLinhaConta>

                            <InputCadastro
                                id='nomeConta'
                                name="nomeConta"
                            >Nome da Conta</InputCadastro>

                            <DivLinhaConta>
                                <InputCadastro
                                    id='ValorLivre'
                                    name="ValorLivre"
                                >Valor Livre</InputCadastro>

                                <InputCadastro
                                    id="ValorSeparado"
                                    name="ValorSeparado"
                                    onChange={habdleInputChangeValorSeparado}
                                >Valor Separado</InputCadastro>
                            </DivLinhaConta>
                            <DivLinhaConta>
                                <Toggle></Toggle> ativo
                            <Toggle></Toggle> ativo
                            </DivLinhaConta>




                            {/**   
    
    ativo?: boolean
    bloqueado?: boolean
   
  
    bancosIdFK?: {
        id: number
        nomeBanco?: string
        urlImagemBanco?: string
    }
 */}
                        </TelasFlutuantes>


                    </CardListTab>
                </Tabs>

            </Tab>


        </LayoutPrincipal>

    )
}
export default Conta
