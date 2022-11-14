//styles
import styles from './PanelTop.module.scss';

//hooks
import { useState } from 'react';

//components
import { Character } from "../../types/apiTypes";
import PanelSection from './PanelSection';
import Divider from './Divider';

type ApiResponse = {
  info: {
    count: number,
    pages: number,
    next?: string,
    prev?: string,
  };
  results: Character[];
}

interface PanelTopProps {
  pageData: ApiResponse
}

const PanelTop: React.FC<PanelTopProps> = ({pageData}): JSX.Element => {
  console.log({pageData})
  const { info, results } = pageData;
  const [selectedLeft, setSelectedLeft] = useState<Character | null>(null);
  const [selectedRight, setSelectedRight] = useState<Character | null>(null);
  
  return (
    <div className={styles.PanelTop}>
      {/* left pane */}
      <PanelSection 
        charactersList={results} 
        selectedCharacter={selectedLeft} 
        selectCharacter={setSelectedLeft}
      />

      {/* <Divider color={'#02accb'} /> */}

      {/* right pane */}
      <PanelSection 
        charactersList={results} 
        selectedCharacter={selectedRight} 
        selectCharacter={setSelectedRight}
      />
    </div>
  )
}

export default PanelTop