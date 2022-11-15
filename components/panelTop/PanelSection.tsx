//styles
import styles from './PanelSection.module.scss';

//types
import { Character } from "../../types/apiTypes";
import { Dispatch, SetStateAction } from 'react';

//components
import CharacterCard from "../characterCard/CharacterCard";

interface PanelSectionProps {
  charactersList: Character[];
  selectCharacter: Dispatch<SetStateAction<Character | null>>;
  selectedCharacter: Character | null;
}

const PanelSection: React.FC<PanelSectionProps> = ({ 
  charactersList, 
  selectCharacter, 
  selectedCharacter,
}): JSX.Element => {

  return (
    <div className={styles.PanelSection}>
      <div className={styles.list_wrapper}>
      {charactersList.map(character => (
        <CharacterCard 
          data={character} 
          key={character.id} 
          selectCharacter={selectCharacter}
          selectedCharacter={selectedCharacter}
        />
      ))}
      </div>
    </div>
  )
}

export default PanelSection;