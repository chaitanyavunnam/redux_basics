import { BUY_CAKE, BUY_ICECREAM } from "./actions"

const initialState = {
  noOfcakes: 10,
  noOfIcecreams: 20,
}

export const reducer = (state = initialState, action) => {
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

//Creating multiple reducers

const initialcakeState = {
  noOfcakes: 10,
}

const initialIcecreamState = {
  noOfIcecreams: 20,
}

export const cakeReducer = (state = initialcakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfcakes: state.noOfcakes - 1,
      }
    default:
      return state
  }
}

export const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIcecreams: state.noOfIcecreams - 1,
      }
    default:
      return state
  }
}
