//styles
import styles from './PanelBottom.module.scss';

//types
import { Character, responseData } from "../../types/apiTypes"

//context
import { SelectedContext } from '../../context';

//hooks
import { useContext } from 'react';

interface PanelBottomProps {
  episodesData: responseData
}

const PanelBottom: React.FC<PanelBottomProps> = ({
  episodesData
}): JSX.Element => {
  console.log({episodesData})
  const { compareLeft, compareRight } = useContext(SelectedContext);

  const leftEpisodes = compareLeft?.episode;

  const rightEpisodes = compareRight?.episode;

  const onlyLeftEpisodes = leftEpisodes?.filter(leftEpi => !rightEpisodes?.find(rightEpi => leftEpi === rightEpi)) 
  const sharedEpisodes = leftEpisodes?.filter(leftEpi => rightEpisodes?.find(rightEpi => leftEpi === rightEpi)) 
  const onlyRightEpisodes = rightEpisodes?.filter(rightEpi => !leftEpisodes?.find(leftEpi => rightEpi === leftEpi)) 

  console.log({onlyLeftEpisodes, sharedEpisodes, onlyRightEpisodes});

  return (
    <div className={styles.PanelBottom}>
      <div className={styles.section}>
        <h3>
          <span>{compareLeft?.name}</span> Only <span>Episodes</span>
        </h3>
        {onlyLeftEpisodes?.map((episode, id) => (
          <p key={id}>{episode}</p>
        ))}
      </div>
      <div className={styles.section}>
        <h3 className={styles.middle}>
          Shared <span>Episodes</span>
        </h3>
        {sharedEpisodes?.map((episode, id) => (
          <p key={id}>{episode}</p>
        ))}
      </div>
      <div className={styles.section}>
        <h3>
          <span>{compareRight?.name}</span> Only <span>Episodes</span>
        </h3>
        {onlyRightEpisodes?.map((episode, id) => (
          <p key={id}>{episode}</p>
        ))}
      </div>
    </div>
  )
}

export default PanelBottom