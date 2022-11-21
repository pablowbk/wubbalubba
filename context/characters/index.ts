import { createContext, Dispatch, SetStateAction } from 'react';
import { CharactersPerPage } from '../../types/apiTypes';

type CharactersListAll = CharactersPerPage[];

type CharactersContextType =  {
  charactersPaginated: CharactersListAll | null;
  setCharactersPaginated: Dispatch<SetStateAction<CharactersPerPage[] | null>>;
}

export const CharactersPaginatedContext = createContext<CharactersContextType>({} as CharactersContextType);