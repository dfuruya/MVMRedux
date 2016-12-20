const recipes = (state = [], action) => {
  switch(action.type) {
    case 'SAVE_RECIPE':
      return [...state, action.recipes];
    case 'SHOW_RECIPES':
      const recipes = [];
      for (let recipe of action.recipes) {
        recipes.push(Object.assign({}, recipe, {checked: false}));
      }
      return recipes;
    case 'CHECK_RECIPE':
      const toggledRecipe = state[action.recipes];
      toggledRecipe.checked = !toggledRecipe.checked;
      return [
        ...state.slice(0, action.recipes), 
        toggledRecipe,
        ...state.slice(action.recipes + 1)
      ];
  }
  return state;
};

export default recipes;
