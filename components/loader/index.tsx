import Image from 'next/image';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <div className={styles.img_wrapper}>
        {/* Rick */}
        <Image src={'/assets/rick.svg'} width={80} height={80} alt='loader' className={styles.loader_img} />

        {/* Morty */}
        <Image src={'/assets/morty.svg'} width={80} height={80} alt='loader' className={styles.loader_img} />
      </div>
    </div>
  )
}

export default Loader