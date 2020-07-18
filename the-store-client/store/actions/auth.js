export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login_action = (user) => {
  return { type: login_action, user };
};
