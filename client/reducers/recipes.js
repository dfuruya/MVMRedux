const recipes = (state = [], action) => {
  console.log('>> RECIPE reducer activated: ', state, action);
  switch(action.type) {
    case 'SAVE_RECIPE':
      console.log('>>> SAVE_RECIPE reducer state: ', state, action);
      return [...state, action.recipes];
    case 'SHOW_RECIPES':
      console.log('>>> SHOW_RECIPES reducer state: ', state, action);
      const recipes = [];
      for (let recipe of action.recipes) {
        recipes.push(Object.assign({}, recipe, {checked: false}));
      }
      return recipes;
    case 'CHECK_RECIPE':
      console.log('>>> CHECK_RECIPE reducer state: ', state, action.recipes);
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
