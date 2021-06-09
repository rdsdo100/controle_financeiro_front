import React, {ChangeEvent,useState } from 'react';
import InputCadastro from '../../component/inputs/InputCadastro';
import LayoutPrincipal from '../../component/LayoutPrincipal';
import {  Tab, Tabs } from '../../component/TabsComponents';
import CardRegisterTab from '../../component/TabsComponents/CardRegisterTab';


import { Container } from './styles'


interface IButton {
    display?: string
}

interface IUsuario {
    id?: number
    nome: string
    email: string
    senha: string
}

const UsuarioCadastro: React.FC = () => {
    
    const [message, setMessage] = useState<string>('')
    const [butonEnviar, setButtonEnviar] = useState<IButton>({ display: 'flex' })
    const [nome, setNome] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    function handleImputNome(event: ChangeEvent<HTMLInputElement>) {
        const nome = event.target.value

        setNome(String(nome))


    }
    function handleImputEmail(event: ChangeEvent<HTMLInputElement>) {
        const emailUsuario = event.target.value
        setEmail(String(emailUsuario))

    }

    function handleImputPassword(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setPassword(String(value))

    }

    return (
        <Container>
            <LayoutPrincipal titulo='Usuarios'>

                <Tab>
                    <Tabs IdNameTab="tab1Usuario"
                        defaultCheckedTab={true}
                        text='Cadastrar Usuário'>
                        <CardRegisterTab>
                        <form onSubmit={()=>{}}>

                            <InputCadastro
                                id="nome_usuario"
                                onChange={handleImputNome}
                                defaultValue={nome}>
                                Nome
                    </InputCadastro>

                            <InputCadastro
                                id="email_usuario"
                                defaultValue={email}
                                onChange={handleImputEmail}>
                                E-mail
                    </InputCadastro>

                          
                            <InputCadastro
                                id="senha_usuario"
                                type='password'
                                onChange={handleImputPassword}
                                defaultValue={password}>
                                Senha
                        </InputCadastro>
                  
                        </form>
                        </CardRegisterTab>
                    </Tabs>
                  

                </Tab>


            </LayoutPrincipal>
        </Container>

    )
}
export default UsuarioCadastro