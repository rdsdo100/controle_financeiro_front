import React, { ChangeEvent, useState } from 'react';
import { IContas } from '../../../pages/Conta';
import { api } from '../../../services/api';
import Button from '../../buttons/Button';
import InputCadastro from '../../inputs/InputCadastro';
import Toggle from '../../inputs/Toggle';
import TelasFlutuantes from '../../TelasFlutuantes';
import { Div30Conta, Div70Conta, DivLinhaConta } from './styles';

interface IEditContas {

  id?: number
  valorLivre?: number
  valorSeparado?: number
  ativo?: boolean
  bloqueado?: boolean
  nomeConta?: string
  usuariosIdFK?: number
  bancosIdFK?: number
  contaAtualizar: number
  readonly fechar: (arg0: string) => void;
  readonly retornoEdit: (arg0: number) => void;
}

const EditContas: React.FC<IEditContas> = ({
  id,
  valorLivre,
  valorSeparado,
  ativo,
  bloqueado,
  nomeConta,
  contaAtualizar,
  fechar,
  retornoEdit
}) => {

  const [valorlivreEdit, setValorLivreEdit] = useState<number>()
  const [valorSeparadoEdit, setValorSeparadoEdit] = useState<number>()
  const [ativoEdit, setAtivoEdit] = useState<boolean>()
  const [bloqueadoEdit, setBloqueadoEdit] = useState<boolean>()
  const [nomeContaEdit, setNomeContaEdit] = useState<string>()
  const auth = localStorage.getItem('Authorization')

  function habdleInputChangeNomeConta(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setNomeContaEdit(String(value))
  }
  function habdleInputChangeValorSeparado(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setValorSeparadoEdit(Number(value))
  }
  function habdleInputChangeValorLivre(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setValorLivreEdit(Number(value))
  }

  function habdleInputChangeAtivo(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setAtivoEdit(Boolean(value))
  }

  function habdleInputChangeBloqueado(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setBloqueadoEdit(Boolean(value))
  }

  const buttonEdit = () => {

    let editConta = {
      id: 0,
      valorLivre: valorlivreEdit,
      valorSeparado: valorSeparadoEdit,
      ativo: ativoEdit,
      bloqueado: bloqueadoEdit,
      nomeConta: nomeContaEdit,
    }

    if (
      editConta.id !== 0 ||
      editConta.valorLivre ||
      editConta.valorSeparado ||
      editConta.ativo ||
      editConta.bloqueado ||
      editConta.nomeConta
    ) {

      editConta.id = Number(id)

      api.put<IContas>('conta', editConta,
        { headers: { authorization: auth } })
        .then(response => {
          const resposta: any = response.data

          alert('Salvo!')
          limparCamposObj()
          retornoEdit(contaAtualizar + 1);

        }).catch(erro => {
          console.log(erro)
          alert('Não enviado!')

        })

    } else {
      alert("Sem alterações feitas")

    }
  }



  function limparCamposObj() {

    id = 0
    setValorLivreEdit(undefined)
    setValorSeparadoEdit(undefined)
    setAtivoEdit(undefined)
    setBloqueadoEdit(undefined)
    setNomeContaEdit(undefined)
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
            defaultValue={id}
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
        id='nomeContaEdit'
        name="nomeContaEdit"
        defaultValue={nomeConta}
        onChange={habdleInputChangeNomeConta}
      >Nome da Conta</InputCadastro>

      <DivLinhaConta>
        <InputCadastro
          id='ValorLivreEdit'
          name="ValorLivreEdit"
          onChange={habdleInputChangeValorLivre}
          defaultValue={valorLivre}
        >Valor Livre</InputCadastro>

        <InputCadastro
          id="ValorSeparadoEdit"
          name="ValorSeparadoEdit"
          onChange={habdleInputChangeValorSeparado}
          defaultValue={valorSeparado}
        >Valor Separado</InputCadastro>
      </DivLinhaConta>
      <DivLinhaConta>
        <Toggle
          id="ativo"
          name="ativo"
          onChange={habdleInputChangeAtivo}
          defaultChecked={ativo}>
          Ativo</Toggle>

        <Toggle
          id="bloqueado"
          name="bloqueado"
          onChange={habdleInputChangeBloqueado}
          defaultChecked={bloqueado}>
          Bloaqueado</Toggle>
      </DivLinhaConta>


      <Button onClick={buttonEdit} style={{ background: "#2600ff", width: "48%" }} > Editar </Button>
      <Button onClick={buttonFechar} style={{ width: "48%" }} > Cancelar </Button>

    </TelasFlutuantes>
  )
};

export default EditContas;