"use client"
import React from "react"
import CakeContainer from "../../../components/cakeContainer"

import { Provider } from "react-redux"
import store from "../../../reactRedux/store"
import CakeContainerWithHooks from "../../../components/cakeContainerWithHooks"
import AsyncActionsContainer from "../../../components/asyncActionsContainer"

export default function Mycomp() {
  return (
    <Provider store={store}>
      <div>
        <CakeContainer />
        <CakeContainerWithHooks />
        <AsyncActionsContainer />
      </div>
    </Provider>
  )
}
