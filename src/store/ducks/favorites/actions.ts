//import { action } from 'typesafe-actions';
import { FavoritesTypes, Pokemon } from './types';

export const addFavorite = (data: Pokemon | undefined) => {
  return { type: FavoritesTypes.ADD_FAVORITES, payload: data };
  //action(FavoritesTypes.UPDATE_USER, { data });
};

export const removeFavorite = (id: number) => {
  return { type: FavoritesTypes.REMOVE_FAVORITES, payload: id };
  //action(FavoritesTypes.REMOVE_USER);
};
