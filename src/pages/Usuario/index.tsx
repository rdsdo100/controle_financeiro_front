
import React, { FormEvent, ChangeEvent, useEffect, useState } from 'react';
import CardUsuario from '../../component/CardUsuario';
import { Button } from '../../component/CardUsuario/styles';
import InputCadastro from '../../component/inputs/InputCadastro';
import Select from '../../component/inputs/Select';
import LayoutPrincipal from '../../component/LayoutPrincipal';
import { CardListTab, Tab, Tabs } from '../../component/TabsComponents';
import { api } from '../../services/api';
import { ApplicationState } from '../../store';
import { Container, DivuttonEnviar, DivButtonEditar, DivSelect } from './styles'


interface IButton {
    display?: string
}

interface IGrupoUsuario {
    id: number
    nome: string
}

interface IEquipeUsuario {
    id: number
    nomeEquipe: string
}

interface IUsuario {
    id?: number
    nome: string
    email: string
    senha: string
    grupoUsuario: number
    equipeUsuario?: number

}

interface IGetUsuario {
    id: number
    nomeUsuario?: string,
    email?: string,
    ativo?: boolean,
    bloqueado?: boolean,
    grupoUsuariosId?: number
    grupoUsuariosNome?: string
    equipeUsuariosId?: number
    equipeUsuariosNome?: string

}

const Usuario: React.FC = () => {
    // const auth = useSelector((state: ApplicationState) => state.auth.auth)
    const auth = localStorage.getItem('Authorization')
    const [listUsuarios, setListUsuarios] = useState<IGetUsuario[]>([])
    const [message, setMessage] = useState<string>('')
    const [idDeleteUsuario, setIdDeleteUsuario] = useState<number>()
    const [idEditUsuario, setIdEditUsuario] = useState<number>()
    const [idCadastroUsuario, setIdCadastroUsuario] = useState<number>()
    const [butonEnviar, setButtonEnviar] = useState<IButton>({ display: 'flex' })
    const [butonEdit, setButtonEdit] = useState<IButton>({ display: 'none' })
    const [nome, setNome] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [grupoUsuario, setGrupoUsuario] = useState<number>(0)
    const [equipeUsuario, setEquipeUsuario] = useState<number>(0)
    const [password, setPassword] = useState<string>('')
    const [listGupoUsuarios, setListGrupoUsuarios] = useState<IGrupoUsuario[]>([])
    const [listEquipeUsuarios, setListEquipeUsuarios] = useState<IEquipeUsuario[]>([])


    useEffect(() => {

        api.get<IGrupoUsuario[]>('gupo-usuario',
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data
                setListGrupoUsuarios(resposta)
            }).catch(erro => {
                alert('Erro ao acessar servidor!')

            })

    }, [])


    useEffect(() => {

        api.get<IEquipeUsuario[]>('equipe-usuario',
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data
                setListEquipeUsuarios(resposta)
            }).catch(erro => {
                alert('Erro ao acessar servidor!')

            })

    }, [])


    useEffect(() => {

        api.get<IGetUsuario>('user',
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
            grupoUsuario: Number(grupoUsuario),
            senha: String(password),
            equipeUsuario: Number(equipeUsuario)
        }

        api.post('user', envio,
            { headers: { authorization: auth } })
            .then(response => {
                const resposta: any = response.data

                alert(resposta)
                setNome('')
                setEmail('')
                setPassword('')
                setGrupoUsuario(0)
                setEquipeUsuario(0)

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

    function handleImputGrupoUsuario(event: ChangeEvent<HTMLSelectElement>) {
        const grupoUsuario = event.target.value
        setGrupoUsuario(Number(grupoUsuario))

    }

    function handleImputEquipeUsuario(event: ChangeEvent<HTMLSelectElement>) {
        const equipeUsuario = event.target.value
        setEquipeUsuario(Number(equipeUsuario))

    }

    function handleImputPassword(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setPassword(String(value))

    }

    function limparCampos() {




        if ((document.getElementById("nome_usuario")) &&
            (document.getElementById("senha_usuario")) &&
            (document.getElementById("grupo_usuario")) &&
            (document.getElementById("equipe_usuario")) &&
            (document.getElementById("email_usuario")) &&
            (document.getElementById("id_usuario"))) {

            (document.getElementById("nome_usuario") as HTMLInputElement).value = "";
            (document.getElementById("senha_usuario") as HTMLInputElement).value = "";
            (document.getElementById("grupo_usuario") as HTMLInputElement).value = "0";
            (document.getElementById("equipe_usuario") as HTMLInputElement).value = "0";
            (document.getElementById("email_usuario") as HTMLInputElement).value = "";
            (document.getElementById("id_usuario") as HTMLInputElement).value = "";
        }
    }


    function carregarCampos(idusuario: string,
        nomeUsuario: string,
        emailUsuario: string,
        grupoUsuario: string,
        equipeUsuario: string,
        senhaUsuario: string) {


        if ((document.getElementById("nome_usuario")) &&
            (document.getElementById("senha_usuario")) &&
            (document.getElementById("grupo_usuario")) &&
            (document.getElementById("equipe_usuario")) &&
            (document.getElementById("email_usuario")) &&
            (document.getElementById("id_usuario"))) {

            (document.getElementById("id_usuario") as HTMLInputElement).value = idusuario;
            (document.getElementById("nome_usuario") as HTMLInputElement).value = nomeUsuario;
            (document.getElementById("grupo_usuario") as HTMLInputElement).value = grupoUsuario;
            (document.getElementById("equipe_usuario") as HTMLInputElement).value = equipeUsuario;
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



        const usuarioEdit: any = listUsuarios.find(item => item.id === idEdit)

        console.log(usuarioEdit)


        carregarCampos(
            String(usuarioEdit?.id),
            String(usuarioEdit.nomeUsuario),
            String(usuarioEdit.email),
            String(usuarioEdit.grupoUsuariosIdFK.id),
            String("0"),
            String(usuarioEdit.senha)

        )

    }


    const handlePut = () => {

        let putEmpresa: IUsuario

        if ((document.getElementById("nome_usuario")) &&
            (document.getElementById("senha_usuario")) &&
            (document.getElementById("grupo_usuario")) &&
            (document.getElementById("equipe_usuario")) &&
            (document.getElementById("email_usuario")) &&
            (document.getElementById("id_usuario"))) {

            putEmpresa = {

                id: Number((document.getElementById("id_usuario") as HTMLInputElement).value),
                nome: String((document.getElementById("nome_usuario") as HTMLInputElement).value),
                grupoUsuario: Number((document.getElementById("grupo_usuario") as HTMLInputElement).value),
                email: String((document.getElementById("email_usuario") as HTMLInputElement).value),
                senha: String((document.getElementById("senha_usuario") as HTMLInputElement).value),
                equipeUsuario: Number((document.getElementById("equipe_usuario") as HTMLInputElement).value)
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

                            <DivSelect>
                                <Select
                                    id="grupo_usuario"
                                    onChange={handleImputGrupoUsuario}
                                    defaultValue={grupoUsuario}>

                                    <option key={0} value='0'>Selecione o Grupo de Usuário!</option>
                                    {
                                        listGupoUsuarios.map((grupo: any) => {
                                            return <option key={grupo.id} value={grupo.id}>{`${String(grupo.id)} - ${String(grupo.nome)} `}</option>
                                        })
                                    }
                                </Select>

                                <Select
                                    id="equipe_usuario"
                                    onChange={handleImputEquipeUsuario}
                                    defaultValue={grupoUsuario}>

                                    <option key={0} value='0'>Selecione o Equipe!</option>
                                    {
                                        listEquipeUsuarios.map((grupo: IEquipeUsuario) => {
                                            return <option key={grupo.id} value={grupo.id}>{`${String(grupo.id)} - ${String(grupo.nomeEquipe)} `}</option>
                                        })
                                    }
                                </Select>
                            </DivSelect>
                            <InputCadastro
                                id="senha_usuario"
                                type='password'
                                onChange={handleImputPassword}
                                defaultValue={password}>
                                Senha
                        </InputCadastro>




                            <DivuttonEnviar style={butonEnviar} >
                                <Button style={{ background: "green" }} type="submit" >Enviar</Button>
                            </DivuttonEnviar>
                            <DivButtonEditar style={butonEdit}>
                                <Button style={{ background: "yellow", color: '#000' }} type="button" onClick={() => { handlePut() }} >Editar</Button>
                                <Button type="button" style={{ background: "#e44c4e", color: '#bfbfbf' }} onClick={() => { handleCancelar() }}  >Cancelar</Button>
                            </DivButtonEditar>


                        </form>
                    </Tabs>
                    <Tabs IdNameTab="tab2Usuario" text='Lista de Usuarios'>
                        <CardListTab>
                            {
                                listUsuarios.map((user: any) => {

                                    return <CardUsuario

                                        idEditUsuario={updateUsuario}
                                        key={user.id}
                                        id={user.id}
                                        nomeUsuario={user.nomeUsuario}
                                        matricula={user.matricula}
                                    />
                                })

                            }
                        </CardListTab>
                    </Tabs>

                </Tab>


            </LayoutPrincipal>
        </Container>

    )
}
export default Usuario