const filterStr = (state = '', action) => {
  switch(action.type) {
    case 'FILTER_FAVORITES':
      return action.filterStr;
  }
  return state;
};

export default filterStr;
