import { combineReducers } from 'redux';

import repositories from './repositories';
import auth from './auth';
import rotas from './rotas'

export default combineReducers({
  repositories,
  auth,
  rotas
});
