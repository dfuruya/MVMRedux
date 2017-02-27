const defaultUserState = {
  user: {
    userName: null,
    favorites: [],
  },
};

const defaultAppState = {
  isAuthenticated: false,
  usernameInput: '',
  passwordInput: '',
  filterStr: '',
  ingredient: '',
  ingredients: [],
  recipes: [],
};

const defaultState = Object.assign({}, defaultUserState, defaultAppState);

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
    // window.localStorage.setItem('state', defaultState); // clear localStorage
    console.log('>.> SAVE serializedState:', JSON.parse(serializedState).user.favorites);
  } catch(err) {
    console.error('Error saving to localStorage: ', err);
    return defaultState;
  }
};
