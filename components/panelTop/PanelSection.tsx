//styles
import styles from './PanelSection.module.scss';

//types
import { Character, responseData } from "../../types/apiTypes";
import { Dispatch, SetStateAction, useState } from 'react';

//components
import CharacterCard from "../characterCard/CharacterCard";
import Paginated from '../pagination/Paginated';
import Loader from '../loader';

interface PanelSectionProps {
  initialApiData: responseData;
  selectCharacter: Dispatch<SetStateAction<Character | null>>;
  selectedCharacter: Character | null;
  panel: 'left' | 'right';
}

const PanelSection: React.FC<PanelSectionProps> = ({ 
  initialApiData, 
  selectCharacter, 
  selectedCharacter,
  panel
}): JSX.Element => {
  const [charactersList, setCharactersList] = useState<Character[]>(initialApiData.results);
  const [pageInfo, setPageInfo] = useState(initialApiData.info);
  const [currentPage, setCurrentPage] = useState(1);

  console.log({charactersList, pageInfo})

  return (
    <div className={styles.PanelSection}>
      <div className={styles.list_wrapper}>
        {/* <Loader />  */}
      {charactersList.map(character => (
        <CharacterCard 
          data={character} 
          key={character.id} 
          selectCharacter={selectCharacter}
          selectedCharacter={selectedCharacter}
        />
      ))}
      </div>
      <Paginated pageInfo={pageInfo} panel={panel}/>
    </div>
  )
}

export default PanelSection;