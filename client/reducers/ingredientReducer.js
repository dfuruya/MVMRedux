const ingredient = (state = '', action) => {
  switch(action.type) {
    case 'INPUT_INGREDIENT':
      return action.ingredient;
    case 'CLEAR_INPUT':
      return '';
  }
  return state;
};

export default ingredient;
