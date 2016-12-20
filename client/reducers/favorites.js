const favorites = (state = [], action) => {
  switch(action.type) {
    case 'SAVE_FAVORITE':
      console.log('>.>.> SAVE_FAVORITE: ', state, action);
      return [...state, action.favorites];
  }
  return state;
};

export default favorites;
