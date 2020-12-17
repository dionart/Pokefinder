/**
 * Action types
 * @UPDATE_FAVORITES update user infos
 * @REMOVE_FAVORITES remove user infos
 */
export enum FavoritesTypes {
  UPDATE_FAVORITES = '@constructionCompany/HANDLE_USER',
  REMOVE_FAVORITES = '@constructionCompany/REMOVE_USER',
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
 * @data : the constructionCompany
 */
export interface FavoritesState {
  favorites: Pokemon;
}
