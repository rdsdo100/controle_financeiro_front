import { StringDecoder } from 'node:string_decoder';
import React, { useState } from 'react';
import { IBancos, IContas } from '../../../pages/Conta';
import InputCadastro from '../../inputs/InputCadastro';
import Select from '../../inputs/Select';
import Toggle from '../../inputs/Toggle';
import TelasFlutuantes from '../../TelasFlutuantes';
import { Div30Conta, Div70Conta, DivLinhaConta } from './styles';

interface IEditContas {
  
  id: number
  valorLivre: number
  valorSeparado: number
  ativo: boolean
  bloqueado: boolean
  nomeConta: string
  usuariosIdFK : number    
  bancosIdFK: number 
   
  readonly fechar: (arg0: string) => void;
}



const EditContas: React.FC <IEditContas> = ({
    id,
  valorLivre,
  valorSeparado,
  ativo,
  bloqueado,
  nomeConta,
  usuariosIdFK,
  bancosIdFK,  
  fechar
}) => {

  


 
  const auth = localStorage.getItem('Authorization')




  function corregarCampos() {
   

    if ((document.getElementById("id")) &&
    (document.getElementById("empresasSelectContas")) &&
    (document.getElementById("nomeConta")) &&
    (document.getElementById("ValorLivre")) &&
    (document.getElementById("ValorSeparado"))) {

      (document.getElementById("id") as HTMLInputElement).value = String(id );
    (document.getElementById("empresasSelectContas") as HTMLInputElement).value = "0";
    (document.getElementById("nomeConta") as HTMLInputElement).value = "";
    (document.getElementById("ValorLivre") as HTMLInputElement).value = "";
    (document.getElementById("ValorSeparado") as HTMLInputElement).value = "";
    



  }


  }

  
  function limparCampos() {

    if ((document.getElementById("id")) &&
      (document.getElementById("empresasSelectContas")) &&
      (document.getElementById("nomeConta")) &&
      (document.getElementById("ValorLivre")) &&
      (document.getElementById("ValorSeparado"))) {

        (document.getElementById("id") as HTMLInputElement).value = "";
      (document.getElementById("empresasSelectContas") as HTMLInputElement).value = "0";
      (document.getElementById("nomeConta") as HTMLInputElement).value = "";
      (document.getElementById("ValorLivre") as HTMLInputElement).value = "";
      (document.getElementById("ValorSeparado") as HTMLInputElement).value = "";
      



    }
  }

  function fecharTelaEdit(fechar: string){
   
  }
  

  const buttonFechar = () => {

    fechar("none");
  }

  return (
    <TelasFlutuantes
      
      telaHeight="70%"
      telaWidth="80%"
      fechar={buttonFechar}>
      <DivLinhaConta>
        <Div30Conta>
          <InputCadastro
            id='id'
            name="id"
            defaultValue = {id}
          >Id</InputCadastro>
        </Div30Conta>
        <Div70Conta>

        {/*  <Select
            id="empresasSelectContas" >
            <option key={0} value='0'>Seleciona a Banco!</option>
            {listBancos.map((banco: IBancos) => {
              return <option key={banco.id} value={banco.id}> {banco.nomeBanco}</option>
            })}

          </Select> */}

        </Div70Conta>
      </DivLinhaConta>

      <InputCadastro
        id='nomeConta'
        name="nomeConta"

        defaultValue = {nomeConta}

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