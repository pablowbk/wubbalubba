//styles
import styles from './PanelSection.module.scss';

//types
import { Character } from "../../types/apiTypes";

//components
import CharacterCard from "../characterCard/CharacterCard";

interface PanelSectionProps {
  charactersList: Character[];
}

const PanelSection: React.FC<PanelSectionProps> = ({ charactersList }): JSX.Element => {

  return (
    <div className={styles.PanelSection}>
      {charactersList.map(character => (
        <CharacterCard data={character} key={character.id} />
      ))}
    </div>
  )
}

export default PanelSection;