export type ApiResponse = {
  charactersData: ResponseData;
  episodesData: Episode[];
}

export type ResponseData = {
  info: Info;
  results: any[];
}

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharacterLocation {
  name: string;
  url: string;
}

export interface ResourceBase {
  id: number;
  name: string;
  url: string;
  created: string;
}

export interface Character extends ResourceBase {
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
}

export interface Episode extends ResourceBase {
  air_date: string;
  episode: string;
  character: string[];
}

export type CharactersPerPage = Character[];