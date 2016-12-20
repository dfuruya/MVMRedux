const favorites = (state = {}, action) => {
  console.log('>> fav reducer activated: ', state, action);
  switch(action) {
    case 'ADD_FAVORITE':
      return Object.assign({}, state, {favorite: 'new favorite!'});
  }
  return state;
};

export default favorites;