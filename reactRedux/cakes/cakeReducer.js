import { BUY_CAKE, BUY_ICECREAM } from "./cakesActions"

const initialState = {
  noOfcakes: 10,
  noOfIcecreams: 20,
}

export const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfcakes: state.noOfcakes - 1,
      }
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIcecreams: state.noOfIcecreams - 1,
      }
    default:
      return state
  }
}
