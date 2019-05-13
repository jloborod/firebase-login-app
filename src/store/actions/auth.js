export const AUTH_INIT = 'AUTH/INIT';
export const AUTH_SET_USER = 'AUTH/SET_USER';

export const init = () => ({
  type: AUTH_INIT,
});

export const setUser = (user) => ({
  type: AUTH_SET_USER,
  user,
});
