import { LOGIN } from "../actions/auth";

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    default:
      return state;
  }
};

export default authReducer;
