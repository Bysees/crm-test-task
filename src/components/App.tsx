import { useState } from 'react'
import { Header, Menu, Main } from './'
import styles from './app.module.scss'


const App = () => {
  const [isShowMenu, setShowMenu] = useState<boolean>(false)

  return (
    <div className={styles.wrapper}>
      <Header setShowMenu={setShowMenu} isShowMenu={isShowMenu} />
      <Menu isShowMenu={isShowMenu} />
      <Main />
    </div>
  )
}

export default App
