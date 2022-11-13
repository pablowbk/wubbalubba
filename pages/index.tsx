//styles
import styles from '../styles/Home.module.scss';

//components
import CharactersBottom from '../components/charactersBottom'
import CharactersTop from '../components/charactersTop'

//utils
import { BASE_URL } from '../utils/constants'

export default function Home({}) {
  
  return (
    <div className={styles.Home}>
      <header>Wubba Lubba Dub Dub!</header>
      
      <CharactersTop />

      <CharactersBottom />
    </div>
  )
}

export const getServerSideProps = async () => {
  const initialData = await fetch(BASE_URL + '/character');
  const response = await initialData.json();

  console.log(response)

  return {
    props: {
      characters: response,
    },
  }
}
