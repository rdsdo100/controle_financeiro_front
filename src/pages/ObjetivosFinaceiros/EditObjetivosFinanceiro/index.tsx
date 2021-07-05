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

interface IObjetivosEdit {
  dataEstorno?: boolean
  dataMovimento?: Date
  descricao?: string
  estorno?: true
  id?: number
  nomeMovimentacoes?: string
  tipoEntrada?: true
  valorContaAnterior?: number
  valorMovimento?: number
  contasId?: number
}





interface IObjetivosFinaceiros {


  nomeObjetivos: string
  valorObjetivos: number
  valorGuardado: number
  descricao: string
  dataPrevistaObjetivos: Date
  contaId: number



}

interface IEditMovimentacoes {
  editObjetivos?: boolean
  objetivos?: IObjetivosEdit

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

const EditObjetivosFinanceiro: React.FC<IEditMovimentacoes> = ({
  editObjetivos = false, objetivos, carregamento, telaMessagem,
  fechar
}) => {


  const [nomeObjetivos, setNomeObjetivos] = useState<string>('')
  const [valorObjetivos, setValorObjetivos] = useState<number>(0)
  const [valorGuardado, setValorGuardado] = useState<number>(0)
  const [descricao, setDescricao] = useState<string>('')
  const [dataPrevistaObjetivos, setDataPrevistaObjetivos] = useState<Date>(new Date)
  const [contaId, setContaId] = useState<number>(0)
  const auth = localStorage.getItem('Authorization')

  function habdleInputChangeNomeMovimentacoes(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    //setNomeMovimentacoes(String(value))
  }

  function habdleInputChangeNomeConta(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    //setNomeMovimentacoes(String(value))
  }

  function habdleInputChangeValorMovimento(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    //setValorMovimento(Number(value))
  }

  function habdleInputChangeDescricao(event: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = event.target
    setDescricao(String(value))
  }

  function habdleInputChangeTipoEntrada(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
   // setTipoEntrada(Boolean(value))
  }

  function habdleInputChangeContasId(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    //setContasId(Number(value))
  }

  function salvarMovimentacoes() {

    const registerMovimentacoes: IObjetivosFinaceiros = {

      nomeObjetivos,
      valorObjetivos,
      valorGuardado,
      descricao,
      dataPrevistaObjetivos,
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
              <strong>Entrada?</strong><Toggle></Toggle>
            </DivEntrada>
            <DivEstorno >
              <button>Estorno</button>
            </DivEstorno>


          </DivLinha>
          <DivLinha>
            <DivId >

              <InputCadastro
                id="id"

              >Id</InputCadastro>

            </DivId>

            <DivNome >
              <InputCadastro
                id="nomeMovimentacoes"
                onChange={habdleInputChangeNomeMovimentacoes}
              >Nome</InputCadastro>
            </DivNome>
          </DivLinha>
          <DivLinha>

            <DivValor >
              <InputCadastro
                id="nalorMovimento"
                onChange={habdleInputChangeValorMovimento}
              >Valor</InputCadastro>
            </DivValor>

            <DivData >
              <InputCadastro
                id=""

              >Data</InputCadastro>
            </DivData>


          </DivLinha>
          <DivDescricao >
            <TextArea style={{ height: "200px" }} placeholder={"Descrição"}
              id="descricao"
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

export default EditObjetivosFinanceiro;




