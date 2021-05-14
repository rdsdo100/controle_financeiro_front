import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Nav, A, Label, UL, ImMenuIcons, InputCheck, Span, DivMenu } from './styles'

interface IRotasMenu {
    id: number
    nomeMenu: string
    rotaMenu: string
}
interface IStyleMenu {
    displayMenu: string
}

const Menu: React.FC = () => {


    //const dispath = useDispatch()
    const rotas: IRotasMenu[] = [
        { id: 1, nomeMenu: 'Home', rotaMenu: '/home' },
        { id: 2, nomeMenu: 'Conta', rotaMenu: '/conta' },
        { id: 3, nomeMenu: 'Usuario', rotaMenu: '/usuario' }  
      
    ]

    const [listRotas, setListRotas] = useState<IRotasMenu[]>([])
    const [styleMenu, setStyleMenu] = useState<IStyleMenu>({ displayMenu: "none"  })
   
   useEffect(()=>{
        setListRotas(rotas)
    }, [] )

    function handleCheckMenu() {

        if (document.getElementById("check")) {
            (document.getElementById("check") as HTMLInputElement).checked = false;
          

        }

        setStyleMenu({ displayMenu: 'none' })

    }

    function sairSistema() {
    //dispath(loadAuthDelete())
    
   localStorage.removeItem('Authorization')
   localStorage.removeItem('login')
   
    
    }

    return (
        <div>

            <DivMenu
                style={{ display: styleMenu.displayMenu }}
                onClick={() => { handleCheckMenu() }}></DivMenu>
            <div>
                <InputCheck type='checkbox' id='check' ></InputCheck>
                <Label htmlFor="check">
                    <Span onClick={() => { setStyleMenu({ displayMenu: '' }) }} >
                        <ImMenuIcons />
                    </Span>
                </Label>

                <Nav>

                    <UL>
                       
                        {
                            listRotas.map((rota: IRotasMenu) => {

                                return <li
                                    key={rota.id}
                                    onClick={() => { handleCheckMenu() }}>
                                    <A
                                        to={String(rota.rotaMenu)}>
                                        {rota.nomeMenu}
                                    </A>
                                </li>

                            })
                        }

                        <li><A to='/' onClick={() => { sairSistema() }} >Sair</A></li>

                    </UL>

                </Nav>
            </div>
        </div>

    )
}

export default Menu