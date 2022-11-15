//styles
import styles from '../styles/Home.module.scss';

//components
import PanelBottom from '../components/panelBottom'
import PanelTop from '../components/panelTop'

//utils
import { BASE_URL } from '../utils/constants'

type ApiResponse = {
  info: {
    count: number,
    pages: number,
    next?: string,
    prev?: string,
  };
  results: any[];
}

interface HomeProps {
  apiResponse: ApiResponse;
}

export default function Home({apiResponse}: HomeProps) {
  
  return (
    <section className={styles.Home}>
      <header>
        <h2>Select <strong>one character</strong> from <strong>each panel</strong></h2>
        <p>A comparisson of your selection will be shown in the bottom panel.</p>
      </header>
      <PanelTop pageData={apiResponse} />

      <PanelBottom />
    </section>
  )
}

export const getServerSideProps = async () => {
  const initialData = await fetch(BASE_URL + '/character');
  const response = await initialData.json();

  console.log(response)

  return {
    props: {
      apiResponse: response,
    },
  }
}
