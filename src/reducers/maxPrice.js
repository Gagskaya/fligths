const initialState = {
    byMaxPrice : 55000
}
export const maxPrice = (state = initialState,action) => {
    switch(action.type) {
        case 'SET_MAX_PRICE' : 
        return {
            ...state,
            byMaxPrice : +action.payload
        }
        default :
        return state;
    }
}