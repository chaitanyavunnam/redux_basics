// const redux = require("redux")
// const reduxLogger = require("redux-logger")
// const createStore = require(redux)

// import { combineReducers } from "redux"
// import { applyMiddleware } from "redux"

// import { cakeReducer, icecreamReducer, reducer } from "./reducer"
// import { buyCake } from "./actions"

// const logger = reduxLogger.createLogger()

// const rootReducer = combineReducers({
//   cake: cakeReducer,
//   icecream: icecreamReducer,
// })

// // const store = createStore(reducer) this is  for single reducer

// const store = createStore(rootReducer, applyMiddleware(logger)) // This is for multiple reducers

// console.log("inintial state", store.getState())

// const unsubscribe = store.subscribe(() => console.log("this will call everytime when the store is updated", store.getState()))

// store.dispatch(buyCake()) // console.log("this will call everytime when the store is updated", store.getState())
// store.dispatch(buyCake()) // console.log("this will call everytime when the store is updated", store.getState())
// store.dispatch(buyCake()) // console.log("this will call everytime when the store is updated", store.getState())
// unsubscribe()
