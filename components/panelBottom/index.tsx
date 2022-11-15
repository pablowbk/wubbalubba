//styles
import styles from './PanelBottom.module.scss';

//types
import { Character } from "../../types/apiTypes"

interface PanelBottomProps {
  compareLeft: Character | null;
  compareRight: Character | null;
}

const PanelBottom: React.FC<PanelBottomProps> = ({
  compareLeft,
  compareRight,
}): JSX.Element => {
  return (
    <div className={styles.PanelBottom}>
      <div>Left Only</div>
      <div>Shared</div>
      <div>Right Only</div>
    </div>
  )
}

export default PanelBottom