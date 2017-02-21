import axios from 'axios';
import { history } from 'store';
import { setAuthToken } from 'utils/tokenAuth';

// USER actions
export const logInUser = userName => 
  ({type: 'LOGIN_USER', userName});

export const logOutUser = userName => 
  ({type: 'LOGOUT_USER', userName});

export const loginAttempt = loginData => 
  (axios.post('/api/login', loginData));

export const loginUserAuth = loginData => {
  return dispatch => {
    return loginAttempt(loginData)
    .then(res => {
      console.log('loginUserAuth res:', res);
      if (res.status === 404) {
        console.log('%%% user already exists!');
      } else {
        const token = 'some-jwToken';
        console.log(`&&& token value: ${token}`);
        localStorage.setItem('jwToken', token);
        setAuthToken(token);
        dispatch(logInUser(loginData.usernameInput));
        dispatch(authUser());
        history.push('/');
      }
    });
  };
};

export const signupUser = signupData => 
  (axios.post('/api/signup', signupData));

export const authUser = isAuthenticated =>
  ({type: 'AUTHENTICATED', isAuthenticated});

export const deAuthUser = isAuthenticated =>
  ({type: 'NOT_AUTHENTICATED', isAuthenticated});

export const signupUserAuth = loginData => {
  return dispatch => {
    return signupUser(loginData)
    .then(res => {
      const token = res.jwToken;
      console.log(`&&& res value: ${token}`);
      localStorage.setItem('jwToken', token);
      setAuthToken(token);
      dispatch(logInUser(loginData.usernameInput));
      dispatch(authUser());
      history.push('/');
    });
  };
};

// PWD actions
export const inputPwd = passwordInput => 
  ({type: 'INPUT_PWD', passwordInput});

export const clearPwd = passwordInput => 
  ({type: 'CLEAR_PWD', passwordInput});

// USERNAME actions
export const inputUser = usernameInput => 
  ({type: 'INPUT_USERNAME', usernameInput});

export const clearUser = usernameInput => 
  ({type: 'CLEAR_USERNAME', usernameInput});


// INPUT actions
export const inputIngredient = ingredient => 
  ({type: 'INPUT_INGREDIENT', ingredient});

export const clearInput = ingredient => 
  ({type: 'CLEAR_INPUT', ingredient});

// INGREDIENTS actions
export const addIngredient = ingredients => 
  ({type: 'ADD_INGREDIENT', ingredients});

export const removeIngredient = ingredients => 
  ({type: 'REMOVE_INGREDIENT', ingredients});

export const clearIngredients = ingredients => 
  ({type: 'CLEAR_INGREDIENTS', ingredients});

// RECIPES actions
export const showRecipes = recipes => 
  ({type: 'SHOW_RECIPES', recipes});

// FAVORITES actions
export const addFavorite = favorites => 
  ({type: 'ADD_FAVORITE', favorites});

export const removeFavorite = favorites => 
  ({type: 'REMOVE_FAVORITE', favorites});

export const saveFavorite = (favorites, userName) => 
  (axios.post('/api/favs', { userName, favorites }));

export const deleteFavorite = (recipe_id, user) => 
  (axios.delete(`/api/favs/${user}/${recipe_id}`));

// FILTER FAVORITES actions
export const filterFavs = filterStr => 
  ({type: 'FILTER_FAVORITES', filterStr});


// THUNKS for adding/removing favorites
export const saveAddFavorite = (fav, user) => {
  return dispatch => {
    return saveFavorite(fav, user)
    .then(result => dispatch(addFavorite(fav)));
  };
};

export const deleteRemoveFavorite = (favId, favIndex, user) => {
  return dispatch => {
    return deleteFavorite(favId, user)
    .then(result => dispatch(removeFavorite(favIndex)));
  };
};
