export const BUY_CAKE = "BUY_CAKE"
export const BUY_ICECREAM = "BUY_ICECREAM"

export const buyCake = () => {
  return {
    type: BUY_CAKE,
    payload: "my first action",
  }
}

export const buyIcecream = () => {
  return {
    type: BUY_ICECREAM,
    payload: "brought icecream",
  }
}
