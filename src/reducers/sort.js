const initialState = {
    sortBy : ''
}
export const sort = (state = initialState,action) => {
    switch(action.type) {
        case 'SORT_DATA' : 
        return {
            ...state,
            sortBy : action.payload
        }
        default :
        return state;
    }
}