const defaultState = {
  favorites: [],
  ingredients: [],
  recipes: [],
  filterStr: '',
};

export const loadState = () => {
  try {
    let serializedState = localStorage.getItem('state');
    if (serializedState !== undefined) {
      serializedState = JSON.parse(serializedState);
    }
    console.log('>.> LOAD serializedState:', serializedState.favorites);
    return serializedState;
  } catch(err) {
    return defaultState;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
    console.log('>.> SAVE serializedState:', JSON.parse(serializedState).favorites);
  } catch(err) {
    console.error('Error saving to localStorage: ', err);
  }
};
