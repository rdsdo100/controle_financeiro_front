import { Reducer } from 'redux';
import { RotasState, RotaTypes } from './types';

const INITIAL_STATE: RotasState = {
  data: [
    {id: 1 , nomeRota: "rubens" , caminhoRota: 'tt'},
  ]
};

const reducer: Reducer<RotasState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RotaTypes.LOAD_CARREGAR_ROTAS:
      return { ...state };
    case RotaTypes.LOAD_DELETE_ROTAS:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };

    default:
      return state;
  }
};

export default reducer;
