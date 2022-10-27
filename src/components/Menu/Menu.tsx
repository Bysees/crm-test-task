import { FC } from 'react'
import cn from 'classnames'
import MenuList from './MenuList'
import appStyles from '../app.module.scss'
import styles from './menu.module.scss'
import { calendar, cashbox, exit, geo, house, loupe, man, screw, table, tv } from './icons'

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

export type List = typeof list

type Props = {
  isShowMenu: boolean
}

const Menu: FC<Props> = ({ isShowMenu }) => {
  return (
    <aside className={cn(appStyles.aside, styles.wrapper, isShowMenu && styles.wrapper_show)}>
      <nav>
        <MenuList list={list} />
      </nav>
    </aside>
  )
}

export default Menu