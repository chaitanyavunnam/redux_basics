import axios from "axios"

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
    payload: "fetch users",
  }
}

export const fetchUsersSucess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  }
}

export const fetchUsersFailure = (error_msg) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error_msg,
  }
}

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data
        dispatch(fetchUsersSucess(users))
      })
      .catch((error) => {
        const error_msg = error.message
        dispatch(fetchUsersFailure(error_msg))
      })
  }
}
