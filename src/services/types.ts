export interface Example {
  id: string;
  options: Option[];
  name: string;
  optional?: string;
  createdAt: number;
}

interface Option {
  name: string;
  value: string;
}

export interface Pokemon {
  name: string;
  id: string;
  height: number;
  weight: number;
  hp: number;
  attack: number;
  defense: number;
  sprite: string;
  type: any[];
}
