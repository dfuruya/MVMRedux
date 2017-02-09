// TODO: remove initial state
const userName = (state = 'shinji', action) => {
  switch(action.type) {
    case 'LOGIN_USER':
      return action.userName;
    case 'LOGOUT_USER':
      return '';
  }
  return state;
};

export default userName;
