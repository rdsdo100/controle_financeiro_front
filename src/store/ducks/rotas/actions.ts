import { action } from 'typesafe-actions';
import { RotaTypes, Rotas } from './types';

export const loadRequest = () => action(RotaTypes.LOAD_DELETE_ROTAS);  // segundo parametro seria o payload

export const loadSuccess = (data: Rotas[]) => action(RotaTypes.LOAD_CARREGAR_ROTAS, { data });  // segundo parametro seria o payload

