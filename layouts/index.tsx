import styles from './Layout.module.scss';
import portal from '../public/assets/portal.png'
import { useLayoutEffect, useState } from 'react';
import Image from 'next/image';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {

  // const [firstLoad, setFirstLoad] = useState(true);

  // useLayoutEffect(() => {
  //   setFirstLoad(false);
  // }, [])

  return (
    <>
      <div className={styles.logoStart}>
        <Image src={portal} alt={'portal'} />
      </div>

      <main className={styles.main}>{children}</main>
    </>
  )
}