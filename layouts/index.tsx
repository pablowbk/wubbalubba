import styles from './Layout.module.scss';
import portal from '../public/assets/rickymorty-portal.png'
import Image from 'next/image';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className={styles.logoStart}>
        <Image src={portal} alt={'portal'} />
      </div>

      <main className={styles.main}>{children}</main>
    </>
  )
}