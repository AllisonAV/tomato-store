import axios from 'axios'

// User reducer
const reducer = (state={}, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case GET_USER:
      newState.userInfo = action.user
      break
  }

  return newState
}

// User constants
const GET_USER = 'GET_USER'

// User action creators
export const getUser = user => ({
  type: GET_USER,
  user
})

// Dispatchers
export const setUser = user => 
  dispatch => 
    axios.post('/api/users', user)
      .then(response => {
        dispatch(getUser(response.data))
      })
      .catch(err => console.error(err))

export default reducer