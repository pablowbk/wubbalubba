//styles
import styles from '../styles/Home.module.scss';

//components
import PanelBottom from '../components/panelBottom'
import PanelTop from '../components/panelTop'

//utils
import { BASE_URL } from '../utils/constants'

//context
import { SelectedContext } from '../context/selected';

import { useState } from 'react';
import { ApiResponse, Character } from '../types/apiTypes';

interface HomeProps {
  apiResponse: ApiResponse;
}

export default function Home({apiResponse}: HomeProps) {
  const [compareLeft, setCompareLeft] = useState<Character | null>(null);
  const [compareRight, setCompareRight] = useState<Character | null>(null);

  return (
    <section className={styles.Home}>
      <header>
        <h2>Select <strong>one character</strong> from <strong>each panel</strong></h2>
        <p>A comparisson of your selection will be shown in the bottom panel.</p>
      </header>

      <SelectedContext.Provider value={{
        compareLeft, 
        setCompareLeft, 
        compareRight, 
        setCompareRight,
      }}>
        <PanelTop pageData={apiResponse.charactersData} />

        {compareLeft && compareRight && (
          <PanelBottom episodesData={apiResponse.episodesData} />
        )}
      </SelectedContext.Provider>
    </section>
  )
}

export const getServerSideProps = async () => {
  const getAllEpisodes = async (list: any[], nextUrl: string): Promise<any> => {
    const getPageResults = await fetch(nextUrl);
    const { info, results } = await getPageResults.json();

    const episodes = [...list, ...results];
    
    if (info.next) {
      return await getAllEpisodes(episodes, info.next);
    } else {
      return episodes;
    }  
  }

  try {
    const fetchCharacters = await fetch(BASE_URL + '/character');
    var charactersData = await fetchCharacters.json();

    var episodesData = await getAllEpisodes([], BASE_URL + '/episode');

  } catch (e) {
    console.log({error: e})
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  return {
    props: {
      apiResponse: {
        charactersData,
        episodesData: episodesData ?? null,
      }
    },
  }
}
