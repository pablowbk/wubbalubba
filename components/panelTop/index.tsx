//styles
import styles from './PanelTop.module.scss';

//hooks
import { useContext } from 'react';

//components
import PanelSection from './PanelSection';

//type
import { ResponseData } from "../../types/apiTypes";

//context
import { SelectedContext } from '../../context/selected';

interface PanelTopProps {
  pageData: ResponseData;
}

const PanelTop: React.FC<PanelTopProps> = ({pageData}): JSX.Element => {
  const { compareLeft, setCompareLeft, compareRight, setCompareRight } = useContext(SelectedContext);
  
  return (
    <div className={styles.PanelTop}>
      {/* left pane */}
      <PanelSection 
        initialApiData={pageData} 
        selectedCharacter={compareLeft} 
        selectCharacter={setCompareLeft}
      />

      {/* right pane */}
      <PanelSection 
        initialApiData={pageData} 
        selectedCharacter={compareRight} 
        selectCharacter={setCompareRight}
      />
    </div>
  )
}

export default PanelTop