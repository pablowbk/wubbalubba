//styles
import styles from './EpisodeItem.module.scss';

//types
import { Episode } from '../../../types/apiTypes'

interface EpisodeItemProps {
  episode: Episode;
  color: string;
}

const EpisodeItem: React.FC<EpisodeItemProps> = ({episode, color}) => {
  return (
    <li key={episode.id} className={styles.Episode}>
      <p className={styles.number} style={{color}}>#{episode.id}</p>

      <p style={{color}}>
        <span className={styles.name}>{episode.name}</span>
        <span className={styles.airDate} style={{color}}>{episode.air_date}</span>
      </p>
    </li>
  )
}

export default EpisodeItem