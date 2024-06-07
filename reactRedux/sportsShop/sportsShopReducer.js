const { BUY_BAT, BUY_BALL, BUY_JERSEY } = require("./sportsShopActions")

const initialState = {
  bats: 10,
  balls: 100,
  volleyBalls: 20,
  jerseys: 45,
}

const sportsShopReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BAT:
      return {
        ...state,
        bats: state.bats - 1,
      }
    case BUY_BALL:
      return {
        ...state,
        balls: state.balls - 1,
      }
    case BUY_JERSEY:
      return {
        ...state,
        jerseys: state.jerseys - 1,
      }
    default:
      return state
  }
}

export default sportsShopReducer
