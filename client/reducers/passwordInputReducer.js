const passwordInput = (state = '', action) => {
  switch(action.type) {
    case 'INPUT_PWD':
      return action.passwordInput;
    case 'CLEAR_PWD':
      return '';
  }
  return state;
};

export default passwordInput;
