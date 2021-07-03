import React, { ChangeEvent, useState } from 'react';
import Button from '../../../component/buttons/Button';
import InputCadastro from '../../../component/inputs/InputCadastro';
import TextArea from '../../../component/inputs/TextArea';
import Toggle from '../../../component/inputs/Toggle';
import TelasFlutuantes from '../../../component/TelasFlutuantes';
import {
  DivButton, DivButtons, DivComponent, FormComponent, DivId,
  DivNome, DivData, DivDescricao, DivEntrada, DivEstorno, DivValor, DivLinha
} from './styles';

interface IMovimentacoesEdit {
  dataEstorno?: boolean
  dataMovimento?: Date
  descricao?: string
  estorno?: true
  id?: number
  nomeMovimentacoes?: string
  tipoEntrada?: boolean
  tipoPoupanca?: boolean
  valorContaAnterior?: number
  valorMovimento?: number
  contasId?: number
}

interface IMovimentacoesRegister {
  nomeMovimentacoes: string
  valorMovimento: number
  descricao: string
  tipoEntrada: boolean
  tipoPoupanca: boolean
  contaId: number
}

interface IEditMovimentacoes {
  editMoviemtacoes?: boolean
  movimentacoes?: IMovimentacoesEdit

  readonly fechar: (arg0: string) => void;
  readonly carregamento: (arg0: string) => void;
  readonly telaMessagem: (message: string) => void;


}

interface IBootonEdit {
  color: string
  text: string
}


interface ILayoutEdit {

  buttonEdit: IBootonEdit
  dasabilitarCampo: boolean


}

const EditMovimentacoes: React.FC<IEditMovimentacoes> = ({
  editMoviemtacoes = false, movimentacoes, carregamento, telaMessagem,
  fechar
}) => {



  const [movimentacoesEdit, setMovimentacoesEdit] = useState<IMovimentacoesEdit>()
  const [nomeMovimentacoes, setNomeMovimentacoes] = useState<string>('')
  const [valorMovimento, setValorMovimento] = useState<number>(0)
  const [descricao, setDescricao] = useState<string>('')
  const [tipoEntrada, setTipoEntrada] = useState<boolean>(true)
  const [tipoPoupanca, setTipoPoupanca] = useState<boolean>(false)
  const [contaId, setContaId] = useState<number>(0)
  const auth = localStorage.getItem('Authorization')

  function habdleInputChangeNomeMovimentacoes(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setNomeMovimentacoes(String(value))
  }

  function habdleInputChangeNomeConta(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setNomeMovimentacoes(String(value))
  }

  function habdleInputChangeValorMovimento(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setValorMovimento(Number(value))
  }

  function habdleInputChangeDescricao(event: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = event.target
    setDescricao(String(value))
  }

  function habdleInputChangeTipoEntrada(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setTipoEntrada(Boolean(value))
  }

  function habdleInputChangeTipoPoupanca(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setTipoPoupanca(Boolean(value))
  }

  function habdleInputChangeContasId(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setContaId(Number(value))
  }

  function salvarMovimentacoes() {

    const registerMovimentacoes: IMovimentacoesRegister = {
      nomeMovimentacoes,
      valorMovimento,
      descricao,
      tipoEntrada,
      tipoPoupanca,
      contaId
    }

    if (registerMovimentacoes) {

    } else {

    }





  }

  const buttonFechar = () => {

    fechar("none");
  }
  const sendMessage = (message: string) => {

    telaMessagem(message);
  }

  const sendCarregar = () => {

    carregamento("");
  }





  return (


    <TelasFlutuantes
      telaHeight="70%"
      telaWidth="80%"
      fechar={buttonFechar}>




      <DivComponent>

        <FormComponent style={{ height: "calc(60vh - 50px)" }}>


          <DivLinha>
            <DivEntrada >
              <strong>Entrada?</strong>
              <Toggle
                defaultChecked={movimentacoes?.tipoEntrada}
              ></Toggle>
            </DivEntrada>
            <DivEntrada >
              <strong>Poupança?</strong>
              <Toggle
                defaultChecked={movimentacoes?.tipoPoupanca}
              ></Toggle>
            </DivEntrada>
            <DivEstorno >
              <button>Estorno</button>
            </DivEstorno>



          </DivLinha>
          <DivLinha>
            <DivId >

              <InputCadastro
                id="id"
                defaultValue={movimentacoes?.id}
              >Id</InputCadastro>

            </DivId>

            <DivNome >
              <InputCadastro
                id="nomeMovimentacoes"
                defaultValue={movimentacoes?.nomeMovimentacoes}
                onChange={habdleInputChangeNomeMovimentacoes}
              >Nome</InputCadastro>
            </DivNome>
          </DivLinha>
          <DivLinha>

            <DivValor >
              <InputCadastro
                id="valorMovimento"
                defaultValue={movimentacoes?.valorMovimento}
                onChange={habdleInputChangeValorMovimento}
              >Valor</InputCadastro>
            </DivValor>

            <DivData >
              <InputCadastro
                id="dataMovimento"
                defaultValue={String(movimentacoes?.dataMovimento)}

              >Data</InputCadastro>
            </DivData>


          </DivLinha>
          <DivDescricao >
            <TextArea style={{ height: "200px" }} placeholder={"Descrição"}
              id="descricao"
              defaultValue={movimentacoes?.descricao}
              onChange={habdleInputChangeDescricao}
            ></TextArea>
          </DivDescricao>



        </FormComponent>

        <DivButtons>
          <DivButton>
            <Button onClick={() => { sendMessage("Salvou") }} style={{ background: "blue" }}>Salvar</Button>
          </DivButton>
          <DivButton>
            <Button onClick={buttonFechar}>Cancelar</Button>
          </DivButton>
        </DivButtons>

      </DivComponent>



    </TelasFlutuantes>
  )
};

export default EditMovimentacoes;





