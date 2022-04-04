const defaultMedicamentos = {
    medicamento: [],
    isLoading: false,
    errors: [],
    totalPages: 0,
    currentPage: 0,
    itemXPage: 10,
    totalItems: 0
}

export const medicamentosReducer = (state = defaultMedicamentos, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'MEDICAMENTOS_LOADING':
            return {...state, isLoading: true };
        case 'MEDICAMENTOS_FAILED':
            return {...state, isLoading: false, errors: ['Error al cargar medicamentos'] };
        case 'MEDICAMENTOS_SUCCESS':
            return {
                ...state,
                medicamento: [...payload.medicamento],
                isLoading: false,
                errors: []
            };
        case 'PACIENTES_CLEAR':
            return {
                ...state,
                medicamento: [],
                isLoading: false,
                errors: []
            };
        default:
            return state;
    }
}