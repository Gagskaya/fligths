const initialState = {
    filterBy : ''
}
export const filter = (state = initialState,action) => {
    switch(action.type) {
        case 'FILTER_DATA' : 
        return {
            ...state,
            filterBy : action.payload
        }
        default :
        return state;
    }
}