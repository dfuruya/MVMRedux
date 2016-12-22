const recipes = (state = [], action) => {
  switch(action.type) {
    case 'SHOW_RECIPES':
      return action.recipes;
  }
  return state;
};

export default recipes;
