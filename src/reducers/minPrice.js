const initialState = {
  byMinPrice: null,
};
export const minPrice = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MIN_PRICE":
      return {
        ...state,
        byMinPrice: +action.payload,
      };
    default:
      return state;
  }
};
