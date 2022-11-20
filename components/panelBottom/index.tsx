//styles
import styles from './PanelBottom.module.scss';

//types
import { Episode } from "../../types/apiTypes";

//context
import { SelectedContext } from '../../context/selected';

//hooks
import { useContext } from 'react';
import EpisodeItem from './episode/Episode';

interface PanelBottomProps {
  episodesData: Episode[];
}

const PanelBottom: React.FC<PanelBottomProps> = ({
  episodesData
}): JSX.Element => {
  const { compareLeft, compareRight } = useContext(SelectedContext);

  const leftEpisodes = compareLeft?.episode;

  const rightEpisodes = compareRight?.episode;

  // episodes from Character obj
  const onlyLeftEpisodes = leftEpisodes?.filter(leftEpi => !rightEpisodes?.find(rightEpi => leftEpi === rightEpi)); 
  const sharedEpisodes = leftEpisodes?.filter(leftEpi => rightEpisodes?.find(rightEpi => leftEpi === rightEpi)); 
  const onlyRightEpisodes = rightEpisodes?.filter(rightEpi => !leftEpisodes?.find(leftEpi => rightEpi === leftEpi)); 

  // Populating full episode info
  const leftFormatted = episodesData.filter(fullEpisode => onlyLeftEpisodes?.find(urlEpisode => fullEpisode.url === urlEpisode));
  const sharedFormatted = episodesData.filter(fullEpisode => sharedEpisodes?.find(urlEpisode => fullEpisode.url === urlEpisode));
  const rightFormatted = episodesData.filter(fullEpisode => onlyRightEpisodes?.find(urlEpisode => fullEpisode.url === urlEpisode));

  return (
    <div className={styles.PanelBottom}>
      <div className={styles.section}>
        <h3>
          <span>{compareLeft?.name}</span> Only <span>Episodes</span>
        </h3>
        <ul className={styles.episodesList}>
          {leftFormatted?.map((episode) => (
            <EpisodeItem episode={episode} color={'#02accb'} key={episode.id}/>
          ))}
        </ul>
      </div>
      <div className={styles.section}>
        <h3 className={styles.middle}>
          Shared <span>Episodes</span>
        </h3>
        <ul className={styles.episodesList}>
          {sharedFormatted?.map((episode) => (
            <EpisodeItem episode={episode} color={'#a8cb55'} key={episode.id}/>
          ))}
        </ul>
      </div>
      <div className={styles.section}>
        <h3>
          <span>{compareRight?.name}</span> Only <span>Episodes</span>
        </h3>
        <ul className={styles.episodesList}>
          {rightFormatted?.map((episode) => (
            <EpisodeItem episode={episode} color={'#02accb'} key={episode.id}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PanelBottom