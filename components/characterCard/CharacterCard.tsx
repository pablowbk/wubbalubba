//styles
import styles from './CharacterCard.module.scss';

//components
import Image from "next/image";

//types
import { Character } from "../../types/apiTypes"
import StatusIcon from '../statusIcon/StatusIcon';
import { Dispatch, SetStateAction, useRef } from 'react';

interface CharacterCardProps {
  data: Character;
  selectCharacter: Dispatch<SetStateAction<Character | null>>;
  selectedCharacter: Character | null;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  data,
  selectCharacter,
  selectedCharacter,
}) => {
  const {image, name, species, status} = data;

  const handleCardClick = () => {
    if (selectedCharacter?.id !== data.id) {
      selectCharacter(data);
    } else {
      selectCharacter(null)
    }
  };

  const isSelected = selectedCharacter?.id === data.id;
  const notSelected = selectedCharacter && selectedCharacter.id !== data.id;

  return (
    <div 
      className={`${styles.CharacterCard} ${isSelected ? styles.selected : ''} ${notSelected ? styles.notSelected : ''}`}
      onClick={handleCardClick}
    >
      <div className={styles.picture}>
        <div className={styles.img_wrapper}>
          <Image src={image} layout={'fill'} alt={name} />
        </div>
      </div>
      
      <div className={styles.info}>
        <div className={styles.cardInfo_top}>
          <p>{ name }</p>          
        </div>

        <div className={styles.cardInfo_bottom}>
          <StatusIcon status={status} className={styles.statusIcon} />
          <p>{status}</p>
          <span>-</span>
          <p>{species}</p>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard