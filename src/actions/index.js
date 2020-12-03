import { GET_USER_AUTH, SET_USER_AUTH } from '../constant';

export function setUsers(user) {
  return {
    type: SET_USER_AUTH,
    user
  };
}

export function getUsersSaga() {
  return {
    type: GET_USER_AUTH
  };
}
