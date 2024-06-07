import React from "react"
import { connect } from "react-redux"

import { buyCake } from "../reactRedux/cakes/cakesActions"

function CakeContainer(props) {
  return (
    <div>
      <h2>
        No of cakes {props.noOfcakes} icecream {props.noOfIcecreams}
      </h2>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
