import { Reducer } from 'redux';
import { RepositoriesTypes } from './types';
import {AuthState} from "./types";

const INITIAL_STATE: AuthState = {
  auth: ''
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_DELETE:
      return { auth: '' };
    case RepositoriesTypes.LOAD_SUCCCES:
      return {
      auth: action.payload.name,
      };
    default:
      return state;
  }
};

export default reducer;
