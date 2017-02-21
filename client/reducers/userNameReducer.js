const userName = (state = '', action) => {
  switch(action.type) {
    case 'LOGIN_USER':
      return action.userName;
    case 'LOGOUT_USER':
      return '';
  }
  return state;
};

export default userName;
