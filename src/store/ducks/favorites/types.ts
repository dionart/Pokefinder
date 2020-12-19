/**
 * Action types
 * @ADD_FAVORITES update user infos
 * @REMOVE_FAVORITES remove user infos
 */
export enum FavoritesTypes {
  ADD_FAVORITES = '@pokedex/HANDLE_POKEMON',
  REMOVE_FAVORITES = '@pokedex/REMOVE_POKEMON',
}

/**
 * Data types
 * @token : token of user
 * @name : name of user
 */

export interface Pokemon {
  name: string;
  id: string;
  height: number;
  weight: number;
  sprite: string;
  type: any[];
}

/**
 * State type
 * @data : the pokedex
 */
export interface FavoritesState {
  favorites: Pokemon[];
}
