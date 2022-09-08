import {GET_BY_ID,ADD_USER,UPDATE_USER,REMOVE_USER} from "../types/users-type";
 
export default function usersReducer({users}, action) {
  switch (action.type) {
    case GET_BY_ID:
      return [...users]
    case ADD_USER:
      return {users:[...users,action.payload]}
    case UPDATE_USER:
       let newUserArray = users.filter((user)=>
        user.id == action.payload.id
      )
      users[users.indexOf(newUserArray[0])]= action.payload
      return [...users]
    case REMOVE_USER:
      let newArrayUser = users.filter((user)=>
        user.id !== action.payload.id
      )
      return [...newArrayUser]

    default: 
    return {users};
  }
}

