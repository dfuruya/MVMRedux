const isAuthenticated = (state = false, action) => {
  switch(action.type) {
    case 'AUTHENTICATED':
      return true;
    case 'NOT_AUTHENTICATED':
      return false;
  }
  return state;
};

export default isAuthenticated;
