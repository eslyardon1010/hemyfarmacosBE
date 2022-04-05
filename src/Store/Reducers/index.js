import { combineReducers } from 'redux';
import { securityReducer } from './Security/Security.reducer';
import { TodoReducer } from './Todo/Todo.reducer';
import { medicamentosReducer } from './Medicamentos/Medicamentos.reducer';
import { clientesReducer } from './Clientes/Clientes.reducer';
import { proveedoresReducer } from './Proveedores/Proveedores';
import { ventasReducer } from './Ventas/Ventas';
export const rootReducer = combineReducers({
    security: securityReducer,
    todos: TodoReducer,
    medicamentos: medicamentosReducer,
    clientes: clientesReducer,
    proveedores: proveedoresReducer,
    ventas: ventasReducer
})