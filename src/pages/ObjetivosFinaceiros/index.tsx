import React, { useState } from 'react'


import LayoutPrincipal from '../../component/LayoutPrincipal'
import MessageBoxComponent from '../../component/MessageBoxComponent'
import { Tab, Tabs } from '../../component/TabsComponents'

const ObjetivosFinaceiros: React.FC = () => {
   
    
        const [telaVisivel, setTelaVisivel] = useState<string>("none")
        const [telaVisivelMessage, setTelaVisivelMessage] = useState<string>("none")
        const [message, setMessage] = useState<string>(" ")
        const auth = localStorage.getItem('Authorization')
        const [objetivosAtualizar, setObjetivosAtualizar] = useState<number>(0)
        const [carregar, setCarregar] = useState<string>("none")
    
    
        function carregarMessage(message: string) {
            setCarregar("none")
            setTelaVisivelMessage("")
            setMessage(message)
        }
        function fecharMessage(fechar: string) {
            setTelaVisivelMessage(fechar)
        }
    
        return (
    
    <LayoutPrincipal displayCarregamento={carregar} titulo="Objetivos Finaceiros" >
    
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
            text='Lista de Objetivos'
            IdNameTab="tabListObjetivos"
            defaultCheckedTab  >
            </Tabs>
    
        <Tabs
            text='Cadastro'
            IdNameTab="tabRegisterObjetivos"
        >
           
    
        </Tabs>
    </Tab>
    
    
    </LayoutPrincipal>
    
    
    

    )
}
export default ObjetivosFinaceiros
