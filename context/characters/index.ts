import { createContext } from 'react';

type ChactersContextType =  {
  
}

export const SelectedContext = createContext<ChactersContextType>({} as ChactersContextType);