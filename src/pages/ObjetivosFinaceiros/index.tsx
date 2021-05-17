import React from 'react'
import LayoutPrincipal from '../../component/LayoutPrincipal'
import { CardListTab, Tab, Tabs } from '../../component/TabsComponents'
import CardRegisterTab from '../../component/TabsComponents/CardRegisterTab'




const ObjetivosFinaceiros: React.FC = () => {


   
    return (
        <LayoutPrincipal titulo="Conta" >

            <Tab>

                <Tabs
                    text='Lista de contas'
                    IdNameTab="tabListObjetivos"
                    defaultCheckedTab  >
                    <CardListTab>

                        
                     
                    </CardListTab>
                </Tabs>

                <Tabs
                    text='Cadastro'
                    IdNameTab="tabRegisterObjetivos"
                >
                    <CardRegisterTab>

                      

                             
                          

                       
                    </CardRegisterTab>

                </Tabs>
            </Tab>


        </LayoutPrincipal>

    )
}
export default ObjetivosFinaceiros
