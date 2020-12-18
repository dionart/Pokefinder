import { Reducer } from 'redux';
import { FavoritesState, FavoritesTypes } from './types';
import { environment } from '../../../environment/environment';
import { Pokemon } from '../../../services/types';

const INITIAL_STATE: FavoritesState = {
  favorites: [],
};

const reducer: Reducer<any> = (state = INITIAL_STATE, action) => {
  const updatedFavoritesState = state;

  switch (action.type) {
    case FavoritesTypes.ADD_FAVORITES:
      updatedFavoritesState.favorites = [
        ...updatedFavoritesState.favorites,
        action.payload,
      ];

      return { ...state, ...updatedFavoritesState };

    case FavoritesTypes.REMOVE_FAVORITES:
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
