import React, { ChangeEvent, useEffect, useState } from 'react'
import Button from '../../component/buttons/Button'
import InputCadastro from '../../component/inputs/InputCadastro'
import Select from '../../component/inputs/Select'
import LayoutPrincipal from '../../component/LayoutPrincipal'
import { CardListTab, Tab, Tabs } from '../../component/TabsComponents'
import CardRegisterTab from '../../component/TabsComponents/CardRegisterTab'
import { api } from '../../services/api'
import { DivBancos, DivSelect, DivImage, ImageBanco } from './styles'



export interface IContas {

    id?: number
    qtdPontosUsados?: number
    contadorMovimento?: number
    ativo?: boolean
    bloqueado?: boolean
    nomeConta: string
    qtdPontos: number
    valorConta: number
    usuariosIdFK?: {
        id: number
    },
    bancosIdFK?: {
        id: number
    },

}

export interface IBancos {

    id: number
    nomeBanco: string
    urlImagemBanco: string


}
interface IRegisterContas {
    nomeConta: string
    valorConta: string
    qtdPontos: string
}

const Conta: React.FC = () => {


    const [listContas, setListContas] = useState<IContas[]>([])
    const [listBancos, setListBancos] = useState<IBancos[]>([])
    const [registerContas, setRegisterContas] = useState<IRegisterContas>({
        nomeConta: '', valorConta: '', qtdPontos: ''
    })

    const auth = localStorage.getItem('Authorization')



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

    function habdleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setRegisterContas({ ...registerContas, [name]: value })

        console.log(registerContas)

    }

    function habdleSelectChangeBancos(event: ChangeEvent<HTMLSelectElement>) {
        const { name, value } = event.target
       console.log(value)
       

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
                                    onChange={habdleInputChange}

                                >Nome da Conta</InputCadastro>

                                <InputCadastro
                                    id='qtdPontos'
                                    name="qtdPontos"

                                    onChange={habdleInputChange}
                                >Pontos</InputCadastro>

                                <InputCadastro
                                    id="valorConta"
                                    name="valorConta"
                                    onChange={habdleInputChange}
                                >Valor Inicial</InputCadastro>

                            </DivSelect>

                            <DivImage>
                                <ImageBanco src="http://localhost:3333/nubank.png" alt="Girl in a jacket" ></ImageBanco>
                            </DivImage>
                        </DivBancos>





                        <Button>Cadstrar</Button>
                    </CardRegisterTab>

                </Tabs>

                <Tabs
                    text='Lista de contas'
                    IdNameTab="tabListConta" >
                    <CardListTab></CardListTab>
                </Tabs>

            </Tab>


        </LayoutPrincipal>

    )
}
export default Conta
