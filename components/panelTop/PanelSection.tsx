//styles
import styles from './PanelSection.module.scss';

//types
import { Character, responseData } from "../../types/apiTypes";
import { Dispatch, SetStateAction, useState, useContext } from 'react';

//components
import CharacterCard from "../characterCard/CharacterCard";
import Paginated from '../pagination/Paginated';
import Loader from '../loader';
import { CharactersPaginatedContext } from '../../context/characters';
import { BASE_URL } from '../../utils/constants';

interface PanelSectionProps {
  initialApiData: responseData;
  selectCharacter: Dispatch<SetStateAction<Character | null>>;
  selectedCharacter: Character | null;
}

const PanelSection: React.FC<PanelSectionProps> = ({ 
  initialApiData, 
  selectCharacter, 
  selectedCharacter,
}): JSX.Element => {
  const [pageInfo, setPageInfo] = useState(initialApiData.info);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const totalPages = pageInfo.pages;

  const { charactersPaginated, setCharactersPaginated } = useContext(CharactersPaginatedContext);

  const fetchNextPage = async () => {
    setLoading(true);
    
    await fetch(`${pageInfo.next}`)
    .then(res => res.json())
    .then((json: responseData) => {
      setPageInfo(json.info);
      setCharactersPaginated(prev => [...prev!, json.results])
    })

    setLoading(false)

  }   
  
  const handlePrevPage = async () => {
    if (currentPage === 1) return;
    setCurrentPage(prev => prev - 1);
  }

  const handleNextPage = async () => {
    if (currentPage === totalPages || loading) return;
    if (charactersPaginated && typeof charactersPaginated[currentPage] === 'undefined') {
      await fetchNextPage();
      setCurrentPage(prev => prev + 1);
    } else {
      setCurrentPage(prev => prev + 1);
    }
  }
  
  return (
    <div className={styles.PanelSection}>
      <div className={styles.list_wrapper}>
      
      {loading && <Loader />}
      
      {charactersPaginated && charactersPaginated[currentPage - 1]?.map(character => (
        <CharacterCard 
          data={character} 
          key={character.id} 
          selectCharacter={selectCharacter}
          selectedCharacter={selectedCharacter}
        />
      ))}
      </div>

      <div className={styles.pagination_nav}>
        <button 
          onClick={handlePrevPage}
        >
         &lt; Prev
        </button>

        <p>{currentPage} of {totalPages}</p>

        <button 
          onClick={handleNextPage}
        >
          Next &gt;
        </button>
      </div>
    </div>
  )
}

export default PanelSection;