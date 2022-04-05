const defaultProveedores = {
    proveedor: [],
    isLoading: false,
    errors: [],
    totalPages: 0,
    currentPage: 0,
    itemXPage: 10,
    totalItems: 0
}

export const proveedoresReducer = (state = defaultProveedores, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'PROVEEDORES_LOADING':
            return {...state, isLoading: true };
        case 'PROVEEDORES_FAILED':
            return {...state, isLoading: false, errors: ['Error al cargar proveedores'] };
        case 'PROVEEDORES_SUCCESS':
            return {
                ...state,
                proveedor: [...payload.proveedor],
                isLoading: false,
                errors: []
            };
        case 'PROVEEDORES_CLEAR':
            return {
                ...state,
                proveedor: [],
                isLoading: false,
                errors: []
            };
        default:
            return state;
    }
}