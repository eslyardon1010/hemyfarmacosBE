const defaultClientes = {
    cliente: [],
    isLoading: false,
    errors: [],
    totalPages: 0,
    currentPage: 0,
    itemXPage: 10,
    totalItems: 0
}

export const clientesReducer = (state = defaultClientes, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'CLIENTES_LOADING':
            return {...state, isLoading: true };
        case 'CLIENTES_FAILED':
            return {...state, isLoading: false, errors: ['Error al cargar clientes'] };
        case 'CLIENTES_SUCCESS':
            return {
                ...state,
                cliente: [...payload.cliente],
                isLoading: false,
                errors: []
            };
        case 'CLIENTES_CLEAR':
            return {
                ...state,
                cliente: [],
                isLoading: false,
                errors: []
            };
        default:
            return state;
    }
}