const favorites = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FAVORITE':
      return [action.favorites, ...state];
    case 'REMOVE_FAVORITE':
      return [
        ...state.slice(0, action.favorites), 
        ...state.slice(action.favorites + 1)
      ];
  }
  return state;
};

export default favorites;
