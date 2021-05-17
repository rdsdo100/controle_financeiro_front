import React from 'react'
import LayoutPrincipal from '../../component/LayoutPrincipal'
import { CardListTab, Tab, Tabs } from '../../component/TabsComponents'
import CardRegisterTab from '../../component/TabsComponents/CardRegisterTab'




const Movimentacoes: React.FC = () => {


   
    return (
        <LayoutPrincipal titulo="Conta" >

            <Tab>

                <Tabs
                    text='Lista de contas'
                    IdNameTab="tabListMovimentacoes"
                    defaultCheckedTab  >
                    <CardListTab>
                    
                    </CardListTab>
                </Tabs>

                <Tabs
                    text='Cadastro'
                    IdNameTab="tabRegisterMovimentacoes"
                >
                    <CardRegisterTab>

                    </CardRegisterTab>

                </Tabs>
            </Tab>


        </LayoutPrincipal>

    )
}
export default Movimentacoes
