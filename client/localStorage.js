const defaultState = {
  userName: '',
  favorites: [],
  filterStr: '',
  ingredient: '',
  ingredients: [],
  recipes: [],
};

export const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem('state');
    return serializedState !== undefined ? JSON.parse(serializedState) : defaultState;
  } catch(err) {
    console.log('Error loading localStorage: ', err);
    return defaultState;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    window.localStorage.setItem('state', serializedState);
    console.log('>.> SAVE serializedState:', JSON.parse(serializedState).favorites);
  } catch(err) {
    console.error('Error saving to localStorage: ', err);
    return defaultState;
  }
};
