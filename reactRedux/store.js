import { createStore, applyMiddleware } from "redux"
import { cakeReducer } from "./cakes/cakeReducer"
import sportsShopReducer from "./sportsShop/sportsShopReducer"
import usersReducer from "./users/usersReducer"
import { combineReducers } from "redux"
import { thunk } from "redux-thunk"
import logger from "redux-logger" // This is for displaying logs in console log. we need to add it in middleware
import { composeWithDevTools } from "@redux-devtools/extension"

// const store = createStore(cakeReducer)

//If there are multiple reducers the we will follow the below steps

// const rootReducer = combineReducers({
//   cake: cakeReducer,
//   icecream: icecreamReducer,
// })
//  const store = createStore(rootReducer)

const rootReducer = combineReducers({
  sweetsShop: cakeReducer,
  sportsShop: sportsShopReducer,
  userData: usersReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk))) // u can remove that applyMiddleware(logger) if u dont need logs

export default store
