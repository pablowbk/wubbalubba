//styles
import styles from './PanelTop.module.scss';

//hooks
import { useContext } from 'react';

//components
import PanelSection from './PanelSection';

//type
import { Character, responseData } from "../../types/apiTypes";

//context
import { SelectedContext } from '../../context';

interface PanelTopProps {
  pageData: responseData;
}

const PanelTop: React.FC<PanelTopProps> = ({pageData}): JSX.Element => {
  const { info, results } = pageData;
  const { compareLeft, setCompareLeft, compareRight, setCompareRight } = useContext(SelectedContext);
  
  return (
    <div className={styles.PanelTop}>
      {/* left pane */}
      <PanelSection 
        charactersList={results} 
        selectedCharacter={compareLeft} 
        selectCharacter={setCompareLeft}
      />

      {/* <Divider color={'#02accb'} /> */}

      {/* right pane */}
      <PanelSection 
        charactersList={results} 
        selectedCharacter={compareRight} 
        selectCharacter={setCompareRight}
      />
    </div>
  )
}

export default PanelTop