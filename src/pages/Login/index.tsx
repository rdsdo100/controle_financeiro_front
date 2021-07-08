import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react'
import { useHistory} from 'react-router-dom'
import Carregamento from '../../component/Carregamento';
import { api } from '../../services/api';
import LoginServer from "../../services/LoginServer";
import { Component,LoginBox, H2, UserBox , Input ,
     Label , A, Form, Div, LinkNovoCadastro} from './styles'

const Login: React.FC = () => {

    const history = useHistory()
    //const dispath = useDispatch()
    const [usuario , setUsuario] = useState<string>()
    const [senha , setSenha] = useState<string>()
    const [error , setError] = useState<string>()
    const [carregamento , setCarregamento] = useState<string>("none")

    useEffect(()=>{
        localStorage.removeItem('login')
        localStorage.removeItem('Authorization')
    } , [])

    function habdleInputUsuario(event : ChangeEvent<HTMLInputElement>) {
        const {value} = event.target
        setUsuario(String(value))
    }

    function habdleInputSenha(event : ChangeEvent<HTMLInputElement>) {
        const {value} = event.target
        setSenha(String(value))
    }

    async function handleEntrar(event: FormEvent) {
       
        event.preventDefault()
        const loginServer= new LoginServer()

        console.log(api.get('/'))
       setCarregamento("")



        const login = await loginServer.login(String(usuario) , String(senha))
        console.log(login)
       
        localStorage.setItem('login' , String(usuario))
        localStorage.setItem('Authorization', String(login.data.authorization))

     //   dispath(loadAuthSuccess({name: String(login.data.authorization)}))
        
        if(login.data.authorization){
            history.push('/home')
        }else{
            setError("Login Invalido!")
        }
    }


return(
    <Div>

<Carregamento displayCarregamento={carregamento} />

    <Component>
        <LoginBox className='login-box'>
            <H2>Login</H2>
            <Form onSubmit={handleEntrar}>
                <UserBox className='user-box'>
                    <Input type='text' required
                           name="usuario"
                           onChange={habdleInputUsuario}

                    />
                    <Label>Usuário</Label>
                </UserBox>
                <UserBox className='user-box'>
                    <Input type='password' required
                           name="senha"
                           onChange={habdleInputSenha}
                    />
                    <Label>Senha</Label>
                </UserBox>
                <span>{error}</span>
                <A type='submit'
                >Entrar</A>
<LinkNovoCadastro to="/usuario-cadastro">Novo cadastro</LinkNovoCadastro>
            </Form>
        </LoginBox>
    </Component>
    </Div>
)
}
export default Login

//https://mariosouto.com/inputs-materializados-com-css/