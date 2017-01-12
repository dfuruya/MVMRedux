const ingredients = (state = [], action) => {
  switch(action.type) {
    case 'ADD_INGREDIENT':
      return [...state, action.ingredients];
    case 'REMOVE_INGREDIENT':
      return [
        ...state.slice(0, action.ingredients), 
        ...state.slice(action.ingredients + 1)
      ];
    case 'CLEAR_INGREDIENT':
      return [];
  }
  return state;
};

export default ingredients;
