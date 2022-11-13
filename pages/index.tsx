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
    <div className={styles.Home}>
      <PanelTop pageData={apiResponse} />

      <PanelBottom />
    </div>
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
