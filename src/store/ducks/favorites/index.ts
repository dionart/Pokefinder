import { Reducer } from 'redux';
import { FavoritesState, FavoritesTypes } from './types';
import { Pokemon } from '../../../services/types';

//setting inital state as empty array
const INITIAL_STATE: FavoritesState = {
  favorites: [],
};

const reducer: Reducer<any> = (state = INITIAL_STATE, action) => {
  const updatedFavoritesState = state;

  switch (action.type) {
    case FavoritesTypes.ADD_FAVORITES:
      //adding new favorite to existing array
      updatedFavoritesState.favorites = [
        ...updatedFavoritesState.favorites,
        action.payload,
      ];

      return { ...state, ...updatedFavoritesState };

    case FavoritesTypes.REMOVE_FAVORITES:
      //filtering the pokemons that aren't the one that I want to delete
      const filtered = updatedFavoritesState.favorites.filter(
        (filteredItem: Pokemon) => filteredItem.id !== action.payload,
      );

      updatedFavoritesState.favorites = filtered;

      return { ...state, ...updatedFavoritesState };

    default:
      return state;
  }
};

export default reducer;
