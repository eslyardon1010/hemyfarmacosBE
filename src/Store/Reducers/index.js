import { combineReducers } from 'redux';
import { securityReducer } from './Security/Security.reducer';
import { TodoReducer } from './Todo/Todo.reducer';
import { medicamentosReducer } from './Medicamentos/Medicamentos.reducer';
export const rootReducer = combineReducers(
  {
    security: securityReducer,
    todos: TodoReducer,
    medicamentos: medicamentosReducer,
  }
)
