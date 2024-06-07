import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { buyCake, buyIcecream } from "../reactRedux/cakes/cakesActions"
import { buyBall, buyBat } from "../reactRedux/sportsShop/sportsShopActions"
import { fetchUsers } from "../reactRedux/users/usersActions"

function AsyncActionsContainer(props) {
  const users = useSelector((state) => state.userData?.users)
  const error_msg = useSelector((state) => state.userData?.error)
  const loading = useSelector((state) => state.userData?.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
      <h1>Users</h1>
      {loading ? (
        <p>loading........</p>
      ) : users?.length > 0 ? (
        users?.map((user, index) => {
          return (
            <div>
              <p>
                {index + 1}.{user.name}
              </p>
            </div>
          )
        })
      ) : (
        <p>No users</p>
      )}
    </div>
  )
}

export default AsyncActionsContainer
