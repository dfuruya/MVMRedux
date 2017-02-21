const usernameInput = (state = '', action) => {
  switch(action.type) {
    case 'INPUT_USERNAME':
      return action.usernameInput;
    case 'CLEAR_USERNAME':
      return '';
  }
  return state;
};

export default usernameInput;
