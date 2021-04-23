
import React, { FormEvent, ChangeEvent, useEffect, useState } from 'react';
import InputCadastro from '../../component/inputs/InputCadastro';
import LayoutPrincipal from '../../component/LayoutPrincipal';
import { CardListTab, Tab, Tabs } from '../../component/TabsComponents';
import { api } from '../../services/api';

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



const Usuario: React.FC = () => {
    // const auth = useSelector((state: ApplicationState) => state.auth.auth)
    const auth = localStorage.getItem('Authorization')
    const [listUsuarios, setListUsuarios] = useState([])
    const [message, setMessage] = useState<string>('')
    const [idDeleteUsuario, setIdDeleteUsuario] = useState<number>()
    const [idEditUsuario, setIdEditUsuario] = useState<number>()
    const [idCadastroUsuario, setIdCadastroUsuario] = useState<number>()
    const [butonEnviar, setButtonEnviar] = useState<IButton>({ display: 'flex' })
    const [butonEdit, setButtonEdit] = useState<IButton>({ display: 'none' })
    const [nome, setNome] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')









    useEffect(() => {

        api.get('user',
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data

                setListUsuarios(resposta)


            })
            .catch(erro => {
                alert('Erro ao acessar servidor!')

            })

    }, [idDeleteUsuario, idEditUsuario, idCadastroUsuario])


    async function handleSubmit(event: FormEvent) {

        const envio: IUsuario = {
            nome: String(nome),
            email: String(email),
            senha: String(password)
            
        }

        api.post('user', envio,
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data

                alert(resposta)
                setNome('')
                setEmail('')
                setPassword('')
              

            })
            .catch(erro => {
                alert('Erro ao acessar servidor!')
                //  history.push('/')
            })

    }

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

    function limparCampos() {

        if ((document.getElementById("nome_usuario")) &&
            (document.getElementById("senha_usuario")) &&
            (document.getElementById("email_usuario")) &&
            (document.getElementById("id_usuario"))) {

            (document.getElementById("nome_usuario") as HTMLInputElement).value = "";
            (document.getElementById("senha_usuario") as HTMLInputElement).value = "";
            (document.getElementById("email_usuario") as HTMLInputElement).value = "";
            (document.getElementById("id_usuario") as HTMLInputElement).value = "";
        }
    }


    function carregarCampos(idusuario: string,
        nomeUsuario: string,
        emailUsuario: string,
        senhaUsuario: string) {


        if ((document.getElementById("nome_usuario")) &&
            (document.getElementById("senha_usuario")) &&
            (document.getElementById("email_usuario")) &&
            (document.getElementById("id_usuario"))) {

            (document.getElementById("id_usuario") as HTMLInputElement).value = idusuario;
            (document.getElementById("nome_usuario") as HTMLInputElement).value = nomeUsuario;
            (document.getElementById("email_usuario") as HTMLInputElement).value = emailUsuario;
            (document.getElementById("senha_usuario") as HTMLInputElement).value = senhaUsuario;

        }

        if ((document.getElementById("tab1Usuario")) &&
            (document.getElementById("tab2Usuario"))) {
            (document.getElementById("tab1Usuario") as HTMLInputElement).checked = true;
            (document.getElementById("tab2Usuario") as HTMLInputElement).checked = false;

        }
    }



    const handleDelete = (idDelete: number) => {

        api.delete<string>(`user/${idDelete}`,
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data

                setMessage(String(resposta))
                setIdDeleteUsuario(idDelete)

            }).catch(erro => {

                alert('Não enviado!')

            })
    }





    function updateUsuario(idEdit: number) {

        const ativarButton: IButton = { display: 'flex' }
        const desativarButton: IButton = { display: 'none' }
        setButtonEdit(ativarButton)
        setButtonEnviar(desativarButton)



    



      

    }


    const handlePut = () => {

        let putEmpresa: IUsuario

        if ((document.getElementById("nome_usuario")) &&
            (document.getElementById("senha_usuario")) &&
            (document.getElementById("email_usuario")) &&
            (document.getElementById("id_usuario"))) {

            putEmpresa = {

                id: Number((document.getElementById("id_usuario") as HTMLInputElement).value),
                nome: String((document.getElementById("nome_usuario") as HTMLInputElement).value),
                email: String((document.getElementById("email_usuario") as HTMLInputElement).value),
                senha: String((document.getElementById("senha_usuario") as HTMLInputElement).value),
            }




            api.put(`user`, putEmpresa,
                { headers: { authorization: auth } })
                .then(response => {
                    const resposta: any = response.data

                    const ativarButton: IButton = { display: 'flex' }
                    const desativarButton: IButton = { display: 'none' }
                    setButtonEdit(desativarButton)
                    setButtonEnviar(ativarButton)

                    limparCampos()

                    setMessage(String(resposta))

                    setIdEditUsuario(putEmpresa.id)

                }).catch(erro => {

                    alert('Não enviado!')

                })
        }
    }




    function handleCancelar() {

        const ativarButton: IButton = { display: 'flex' }
        const desativarButton: IButton = { display: 'none' }
        setButtonEdit(desativarButton)
        setButtonEnviar(ativarButton)

        limparCampos()

    }


    return (
        <Container>
            <LayoutPrincipal titulo='Usuarios'>

                <Tab>
                    <Tabs IdNameTab="tab1Usuario"
                        defaultCheckedTab={true}
                        text='Cadastrar Usuário'>
                        <form onSubmit={handleSubmit}>

                            <div style={butonEdit}>
                                <InputCadastro id="id_usuario" defaultValue="0"  >Id</InputCadastro>
                            </div>


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
                    </Tabs>
                    <Tabs IdNameTab="tab2Usuario" text='Lista de Usuarios'>
                        <CardListTab>
                           

                            
                        </CardListTab>
                    </Tabs>

                </Tab>


            </LayoutPrincipal>
        </Container>

    )
}
export default Usuario