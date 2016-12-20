const favorite = (state = {}, action) => {
  switch(action.type) {
    case 'SAVE_FAVORITE':
      console.log('>.>.> ', state, action);
      return state;
  }
  return state;
};

export default favorite;
