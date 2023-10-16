import { createContext, Dispatch, SetStateAction } from 'react';
import { Character } from '../../types/apiTypes';

type SelectedContextType =  {
  compareLeft: Character | null;
  setCompareLeft: Dispatch<SetStateAction<Character | null>>;
  compareRight: Character | null;
  setCompareRight: Dispatch<SetStateAction<Character | null>>;
}

export const SelectedContext = createContext<SelectedContextType>({} as SelectedContextType);