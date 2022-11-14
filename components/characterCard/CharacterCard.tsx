//styles
import styles from './CharacterCard.module.scss';

//components
import Image from "next/image";

//types
import { Character } from "../../types/apiTypes"
import StatusIcon from '../statusIcon/StatusIcon';

interface CharacterCardProps {
  data: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({data}) => {
  const {image, name, species, status} = data;

  return (
    <div className={styles.CharacterCard}>
      <div className={styles.picture}>
        <div className={styles.img_wrapper}>
          <Image src={image} layout={'responsive'} width={80} height={80} alt={name} />
        </div>
        <StatusIcon status={status} className={styles.statusIcon} />
      </div>
      <div className={styles.info}>
        <div className={styles.cardInfo_top}>
          <p>{ name }</p>          
        </div>

        <div className={styles.cardInfo_bottom}>
          <p>{species}</p>
          <span>-</span>
          <p>{status}</p>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard