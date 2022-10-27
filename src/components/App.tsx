import styles from './app.module.scss'
import { Header, Aside, Main } from './'

const App = () => {

  return (
    <div className={styles.wrapper}>
      <Header />
      <Aside />
      <Main />
    </div>
  )
}

export default App
