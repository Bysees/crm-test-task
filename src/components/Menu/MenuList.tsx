import { useState, FC } from 'react'
import cn from 'classnames'
import { Link, useLocation } from "react-router-dom"
import type { List } from './Menu'
import styles from './menu.module.scss'

type Props = {
  list: List
}


const MenuList: FC<Props> = ({ list }) => {
  const { pathname } = useLocation();
  const [isShowList, setShowList] = useState<boolean>(false)

  return (
    <ul className={styles.list}>
      {list.map(({ icon, title, link, list }) => (
        <li className={styles.item} key={title}>
          {link
            ? <>
              <Link to={link} className={cn(pathname === link && styles.active)}>
                <img src={icon} alt="icon" />
                <span>{title}</span>
              </Link>
              <div className={cn(styles.indicator, pathname === link && styles.active)} />
            </>
            : <>
              <button
                onClick={() => setShowList(isShow => !isShow)}
                className={cn(isShowList ? styles.show : '')}>
                <img src={icon} alt="icon" />
                <span>{title}</span>
              </button>
              {list && isShowList && <MenuList list={list} />}
            </>
          }
        </li>
      ))}
    </ul>
  )
}

export default MenuList
