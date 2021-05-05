import React, { useState } from 'react';
import { IBancos, IContas } from '../../../pages/Conta';
import InputCadastro from '../../inputs/InputCadastro';
import Select from '../../inputs/Select';
import Toggle from '../../inputs/Toggle';
import TelasFlutuantes from '../../TelasFlutuantes';
import { Div30Conta, Div70Conta, DivLinhaConta } from './styles';

interface IEditContas {
  bancos: IBancos
  contas: IContas
  styles: { visivel: string }
}



const EditContas: React.FC = () => {

  const [telaVisivel, setTelaVisivel] = useState<string>("none")
  const [listContas, setListContas] = useState<IContas[]>([])
  const [listBancos, setListBancos] = useState<IBancos[]>([])
  const [bancos, setBancos] = useState<IBancos>()

  const [idBanco, setIdBanco] = useState<number>()
  const [nomeConta, setNomeConta] = useState<string>("none")
  const [valorLivre, setValorLivre] = useState<number>()
  const [valorSeparado, setValorSeparado] = useState<number>()
  const auth = localStorage.getItem('Authorization')




  function corregarCampos() {
    if ((document.getElementById("textAreaAtendimento")) &&
      (document.getElementById("empresasSelectAtendimentos")) &&
      (document.getElementById("IdAtendimento"))) {

      (document.getElementById("textAreaAtendimento") as HTMLInputElement).value = "";
      (document.getElementById("empresasSelectAtendimentos") as HTMLInputElement).value = "idEmpresa";
      (document.getElementById("IdAtendimento") as HTMLInputElement).value = "id";

    }
  }

  
  function limparCampos() {
    if ((document.getElementById("textAreaAtendimento")) &&
      (document.getElementById("empresasSelectAtendimentos")) &&
      (document.getElementById("IdAtendimento"))) {

      (document.getElementById("textAreaAtendimento") as HTMLInputElement).value = "";
      (document.getElementById("empresasSelectAtendimentos") as HTMLInputElement).value = "idEmpresa";
      (document.getElementById("IdAtendimento") as HTMLInputElement).value = "id";

    }
  }


  return (
    <TelasFlutuantes
      telaVisivel={telaVisivel}
      telaHeight="70%"
      telaWidth="80%"
      fechar={() => { setTelaVisivel("none") }}>
      <DivLinhaConta>
        <Div30Conta>
          <InputCadastro
            id='id'
            name="id"
          >Id</InputCadastro>
        </Div30Conta>
        <Div70Conta>

          <Select

            id="empresasSelectAtendimentos" >

            <option key={0} value='0'>Seleciona a Banco!</option>
            {listBancos.map((banco: IBancos) => {
              return <option key={banco.id} value={banco.id}> {banco.nomeBanco}</option>
            })}

          </Select>

        </Div70Conta>
      </DivLinhaConta>

      <InputCadastro
        id='nomeConta'
        name="nomeConta"
      >Nome da Conta</InputCadastro>

      <DivLinhaConta>
        <InputCadastro
          id='ValorLivre'
          name="ValorLivre"
        >Valor Livre</InputCadastro>

        <InputCadastro
          id="ValorSeparado"
          name="ValorSeparado"

        >Valor Separado</InputCadastro>
      </DivLinhaConta>
      <DivLinhaConta>
        <Toggle defaultChecked={true}>Ativo</Toggle>
        <Toggle defaultChecked={false}>Bloaqueado</Toggle>
      </DivLinhaConta>

    </TelasFlutuantes>

  )

};

export default EditContas;