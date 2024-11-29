
const ReservationReducer=(state, action) => {
    
    switch(action.type) {
        // case TYPES.INSERTAR_CATEGORIA:
        //     return {
        //         ...state,
        //         categoria: action.payload,
        //         categorias: [...state.categorias, action.payload]
        //     }
        // case TYPES.OBTENER_CATEGORIA:
        //     return {
        //         ...state,
        //         categoria: action.payload
        //     }
        case "GET_RESERVATIONS":
            return {
                ...state,
                reservations: action.payload
            }
        // case TYPES.ACTUALIZAR_CATEGORIA:
        //     return {
        //         ...state,
        //         categorias: state.categorias.map(categoria => categoria.id === action.payload.id ? action.payload : categoria)
        //     }
        // case TYPES.ELIMINAR_CATEGORIA:
        //     return {
        //         ...state,
        //         categorias: state.categorias.filter(categoria => categoria.id !== action.payload.id)
        //     }
        default:
            return state;
    }
}
export default ReservationReducer