//import { action } from 'typesafe-actions';
import { FavoritesState, FavoritesTypes } from './types';

export const addFavorite = (data: FavoritesState) => {
  return { type: FavoritesTypes.UPDATE_FAVORITES, payload: data };
  //action(FavoritesTypes.UPDATE_USER, { data });
};

export const removeUser = () => {
  return { type: FavoritesTypes.REMOVE_FAVORITES };
  //action(FavoritesTypes.REMOVE_USER);
};
