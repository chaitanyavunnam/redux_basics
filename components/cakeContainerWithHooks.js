import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { buyCake, buyIcecream } from "../reactRedux/cakes/cakesActions"
import { buyBall, buyBat } from "../reactRedux/sportsShop/sportsShopActions"

function CakeContainerWithHooks(props) {
  const noOfcakes = useSelector((state) => state.sweetsShop.noOfcakes)
  const noOfIcecreams = useSelector((state) => state.sweetsShop.noOfIcecreams)
  const sportsShopDetails = useSelector((state) => state.sportsShop)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>
        No of cakes {noOfcakes} icecream {noOfIcecreams}
      </h2>
      <button
        onClick={() => {
          dispatch(buyCake())
        }}
      >
        Buy cake
      </button>
      <button
        onClick={() => {
          dispatch(buyIcecream())
        }}
      >
        Buy icecream
      </button>
      <h3 style={{ paddingTop: "50px" }}>Sports Shop</h3>
      <p>
        Bats: {sportsShopDetails.bats}, Balls: {sportsShopDetails.balls}
      </p>
      <button onClick={() => dispatch(buyBat())}>Buy Bat</button>
      <button onClick={() => dispatch(buyBall())}>Buy Ball</button>
    </div>
  )
}

export default CakeContainerWithHooks
