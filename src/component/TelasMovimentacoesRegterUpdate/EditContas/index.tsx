import React, { ChangeEvent, useState } from 'react';
import Button from '../../buttons/Button';
import InputCadastro from '../../inputs/InputCadastro';
import Toggle from '../../inputs/Toggle';
import TelasFlutuantes from '../../TelasFlutuantes';
import { Div30Conta, Div70Conta, DivLinhaConta } from './styles';

interface IMovimentacoes {
  dataEstorno?: boolean
  dataMovimento?: Date
  descricao?: string
  estorno?: true
  id: number
  nomeMovimentacoes?: string
  tipoEntrada?: true
  valorContaAnterior?: number
  valorMovimento?: number
}


const TelasMovimentacoesRegterUpdate: React.FC = () => {

  const [correnteEdit, setCorrenteEdit] = useState<number>()
  const [poupancaEdit, setPoupancaEdit] = useState<number>()
  const [ativoEdit, setAtivoEdit] = useState<boolean>()
  const [bloqueadoEdit, setBloqueadoEdit] = useState<boolean>()
  const [nomeContaEdit, setNomeContaEdit] = useState<string>()
  const auth = localStorage.getItem('Authorization')

  function habdleInputChangeNomeConta(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setNomeContaEdit(String(value))
  }
  function habdleInputChangePoupanca(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setPoupancaEdit(Number(value))
  }
  function habdleInputChangeCorrente(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setCorrenteEdit(Number(value))
  }

  function habdleInputChangeAtivo(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setAtivoEdit(Boolean(value))
  }

  function habdleInputChangeBloqueado(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setBloqueadoEdit(Boolean(value))
  }

 
 

  return (
    <TelasFlutuantes
      telaHeight="70%"
      telaWidth="80%"
      fechar={()=>{}}>
      <DivLinhaConta>
        <Div30Conta>
          <InputCadastro
            id='id'
            name="id"
            defaultValue={1}
          >Id</InputCadastro>
        </Div30Conta>
        <Div70Conta>

         

        </Div70Conta>
      </DivLinhaConta>

      <InputCadastro
        id='nomeContaEdit'
        name="nomeContaEdit"
        defaultValue={""}
        onChange={habdleInputChangeNomeConta}
      >Nome da Conta</InputCadastro>

      <DivLinhaConta>
        <InputCadastro
          id='ValorLivreEdit'
          name="ValorLivreEdit"
          onChange={habdleInputChangeCorrente}
          defaultValue={""}
        >Conta Correte</InputCadastro>

        <InputCadastro
          id="ValorSeparadoEdit"
          name="ValorSeparadoEdit"
          onChange={habdleInputChangePoupanca}
          defaultValue={"poupanca"}
        >Conta Poupança</InputCadastro>
      </DivLinhaConta>
      <DivLinhaConta>
        <Toggle
          id="ativo"
          name="ativo"
          onChange={habdleInputChangeAtivo}
          defaultChecked={true}>
          Ativo</Toggle>

        <Toggle
          id="bloqueado"
          name="bloqueado"
          onChange={habdleInputChangeBloqueado}
          defaultChecked={true}>
          Bloaqueado</Toggle>
      </DivLinhaConta>


      <Button  style={{ background: "#2600ff", width: "48%" }} > Editar </Button>
      <Button  style={{ width: "48%" }} > Cancelar </Button>

    </TelasFlutuantes>
  )
};

export default TelasMovimentacoesRegterUpdate;