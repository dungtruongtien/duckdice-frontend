import { SET_USER_AUTH } from '../constant';

const initialState = { user: null };

export default function setUserAuthInfo(state = initialState, action) {
  switch (action.type) {
  case SET_USER_AUTH:
    return {
      ...state,
      user: { ...action.user }
    };
  default:
    return state;
  }
}
