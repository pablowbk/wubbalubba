export type ApiResponse = {
  charactersData: responseData;
  episodesData: responseData;
}

export type responseData = {
  info: {
    count: number,
    pages: number,
    next?: string,
    prev?: string,
  };
  results: any[];
}

export type Character = {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type Episode = {
  
}