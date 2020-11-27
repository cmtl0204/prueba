import {Ability, Sprites} from './models.index';


export interface Pokemon {
  id?: number;
  name?: string;
  abilities?: Ability[];
  base_experience?: number;
  height?: number;
  weight?: number;
  order?: number;
  url?: string;
  sprites?: Sprites;
}
