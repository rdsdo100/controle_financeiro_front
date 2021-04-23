import React from 'react'
import Button from '../../component/buttons/Button'
import InputCadastro from '../../component/inputs/InputCadastro'
import LayoutPrincipal from '../../component/LayoutPrincipal'
import { CardListTab, Tab, Tabs } from '../../component/TabsComponents'
import CardRegisterTab from '../../component/TabsComponents/CardRegisterTab'




 const Conta: React.FC = () => {

return(
<LayoutPrincipal titulo="Conta" >
   
<Tab>
    <Tabs
    text='Cadastro'
    IdNameTab= "tabRegisterConta"
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
    IdNameTab= "tabListConta" >
        <CardListTab></CardListTab>
    </Tabs>
    
</Tab>


   </LayoutPrincipal>

)
}
export default Conta
