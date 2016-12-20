const ingredients = (state = [], action) => {
  console.log('>> INGR reducer activated: ', state, action);
  switch(action.type) {
    case 'ADD_INGREDIENT':
      console.log('>>> ing reducer state: ', state, action);
      return [...state, action.ingredients];
    case 'REMOVE_INGREDIENT':
      console.log('>>> ing reducer state: ', state, action);
      return [
        ...state.slice(0, action.ingredients), 
        ...state.slice(action.ingredients + 1)
      ];
  }
  return state;
};

export default ingredients;
