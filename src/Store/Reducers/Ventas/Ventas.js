const defaultVentas = {
    venta: [],
    isLoading: false,
    errors: [],
    totalPages: 0,
    currentPage: 0,
    itemXPage: 10,
    totalItems: 0
}

export const ventasReducer = (state = defaultVentas, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'VENTAS_LOADING':
            return {...state, isLoading: true };
        case 'VENTAS_FAILED':
            return {...state, isLoading: false, errors: ['Error al cargar ventas'] };
        case 'VENTAS_SUCCESS':
            return {
                ...state,
                venta: [...payload.venta],
                isLoading: false,
                errors: []
            };
        case 'VENTAS_CLEAR':
            return {
                ...state,
                venta: [],
                isLoading: false,
                errors: []
            };
        default:
            return state;
    }
}