import { NextPage } from "next"

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  rowGap: '2rem',
  minHeight: '100vh',
  padding: 'auto 10vmin',
  flexDirection: 'column' as 'column',
}

const NotFound: NextPage = () => {
  return (
    <div style={styles}>
      <p>Something went wrong while fetching your data. This things happen, y&apos;know?</p>
      <p>Verify that you&apos;re trying to access the right page.</p>
    </div>
  )
}

export default NotFound