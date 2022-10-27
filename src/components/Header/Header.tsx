import { Dispatch, SetStateAction, FC } from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import appStyles from '../app.module.scss'
import styles from './header.module.scss'
import logo from '../../assets/images/header/logo.svg'
import avatar from '../../assets/images/header/avatar.svg'

type Props = {
  setShowMenu: Dispatch<SetStateAction<boolean>>
  isShowMenu: boolean
}

const Header: FC<Props> = ({ setShowMenu, isShowMenu }) => {
  const name = 'Имя'
  const surname = 'Фамилия'

  const toogleMenu = () => setShowMenu(isShow => !isShow)

  return (
    <header className={cn(appStyles.header, styles.wrapper)}>

      <div className={styles.column}>
        <img className={cn(isShowMenu && styles.showing)} src={logo} alt="logotip" onClick={toogleMenu} />
        <span className={styles.title}>Wrench CRM</span>
      </div>

      <div className={styles.column}>
        <Link to="/profile">
          <img src={avatar} alt="your avatar" />
        </Link>
        <span className={styles.username}>{name} {surname}</span>
      </div>

    </header>
  )
}

export default Header