import cn from 'classnames'
import { Routes, Route } from "react-router-dom";
import { Searching, News, NotFound } from '../'
import appStyles from '../app.module.scss'
import styles from './main.module.scss'


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