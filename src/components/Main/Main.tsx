import cn from 'classnames'
import appStyles from '../app.module.scss'
import { Searching, News, NotFound } from '../'
import styles from './main.module.scss'

import { Routes, Route } from "react-router-dom";

const Main = () => {

  return (
    <main className={cn(appStyles.main, styles.wrapper)}>

      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/address" element={<Searching />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </main>
  )
}

export default Main