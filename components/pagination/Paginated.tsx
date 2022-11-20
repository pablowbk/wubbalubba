//styles
import { Info } from '../../types/apiTypes';
import styles from './Paginated.module.scss';

interface PaginatedProps {
  pageInfo: Info;
  panel: 'left' | 'right';
}

const Paginated: React.FC<PaginatedProps> = ({pageInfo, panel}) => {
  return (
    <div className={styles.Paginated}>
      <button>Prev</button>
      <button>Next</button>
    </div>
  )
};

export default Paginated;