import cn from 'classnames'
import { Link, useLocation } from "react-router-dom"
import { useState, FC } from 'react'

import appStyles from '../app.module.scss'
import styles from './menu.module.scss'

import house from '../../assets/images/menu_bar/house.svg'
import loupe from '../../assets/images/menu_bar/loupe.svg'
import table from '../../assets/images/menu_bar/table.svg'
import calendar from '../../assets/images/menu_bar/calendar.svg'
import geo from '../../assets/images/menu_bar/geo.svg'
import tv from '../../assets/images/menu_bar/tv.svg'
import screw from '../../assets/images/menu_bar/screw.svg'
import man from '../../assets/images/menu_bar/man.svg'
import cashbox from '../../assets/images/menu_bar/cashbox.svg'
import exit from '../../assets/images/menu_bar/exit.svg'


const list = [
  { icon: house, title: 'Главная', link: '/' },
  { icon: loupe, title: 'Поиск адресов', link: '/address' },
  { icon: table, title: 'Таблицы', link: '/table' },
  { icon: calendar, title: 'Календарь', link: '/calendar' },
  { icon: geo, title: 'Карты', link: '/map' },
  { icon: tv, title: 'Виджеты', link: '/vidget' },
  {
    icon: screw, title: 'Настройки',
    list: [
      { icon: man, title: 'Настройки профиля', link: '/profile-settings' },
      { icon: cashbox, title: 'Управление Финансами', link: '/cash-manage' }
    ]
  },
  { icon: exit, title: 'Выход', link: '/exit' }
]

// type List = typeof list


const Aside = () => {

  return (
    <aside className={cn(appStyles.aside, styles.wrapper)}>
      <nav>
        <MenuList list={list} />
      </nav>
    </aside>
  )
}


const MenuList = ({ list }: any) => {

  let { pathname } = useLocation();
  const [isShowList, setShowList] = useState<boolean>(false)

  return (
    <ul className={styles.list}>
      {list.map(({ icon, title, link, list }: any) => (
        <li className={styles.item} key={title}>
          {link
            ? <>
              <Link to={link} className={cn(pathname === link ? styles.active : '')}>
                <img src={icon} alt="icon" />
                <span>{title}</span>
              </Link>
              <div className={cn(styles.indicator, pathname === link ? styles.active : '')} />
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

export default Aside