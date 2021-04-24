import React, { useEffect, useState } from 'react'
import Button from '../../component/buttons/Button'
import InputCadastro from '../../component/inputs/InputCadastro'
import LayoutPrincipal from '../../component/LayoutPrincipal'
import { CardListTab, Tab, Tabs } from '../../component/TabsComponents'
import CardRegisterTab from '../../component/TabsComponents/CardRegisterTab'
import { api } from '../../services/api'



interface IContas {

    id: number
    qtdPontosUsados: number
    contadorMovimento?: number
    ativo: boolean
    bloqueado: boolean
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

const Conta: React.FC = () => {


    const [listContas, setListContas] = useState<IContas[]>([])
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




    return (
        <LayoutPrincipal titulo="Conta" >

            <Tab>
                <Tabs
                    text='Cadastro'
                    IdNameTab="tabRegisterConta"
                    defaultCheckedTab    >
                    <CardRegisterTab>
                        <InputCadastro>Banco</InputCadastro>
                        <InputCadastro>Nome da Conta</InputCadastro>
                        <InputCadastro>Pontos</InputCadastro>
                        <InputCadastro>Valor Inicial</InputCadastro>


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
