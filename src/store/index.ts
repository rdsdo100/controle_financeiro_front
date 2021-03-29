import { createStore, Store } from 'redux';

import { RepositoriesState } from './ducks/repositories/types';
import { AuthState } from './ducks/auth/types';

import rootReducer from './ducks/rootReducer';


export interface ApplicationState {
  repositories: RepositoriesState
  auth : AuthState
}


const store: Store<ApplicationState> = createStore(rootReducer);


export default store;
