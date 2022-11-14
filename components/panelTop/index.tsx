//styles
import styles from './PanelTop.module.scss';

//components
import Image from "next/image";
import { Character } from "../../types/apiTypes";
import CharacterCard from "../characterCard/CharacterCard";
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
  
  return (
    <div className={styles.PanelTop}>
      {/* left pane */}
      <PanelSection charactersList={results} />

      <Divider color={'#02accb'} />

      {/* right pane */}
      <PanelSection charactersList={results} />
    </div>
  )
}

export default PanelTop