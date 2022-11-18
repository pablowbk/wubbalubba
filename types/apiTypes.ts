export type ApiResponse = {
  charactersData: responseData;
  episodesData: Episode[];
}

export type responseData = {
  info: {
    count: number;
    pages: number;
    next?: string;
    prev?: string;
  };
  results: any[];
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