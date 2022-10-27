import cn from 'classnames'
import { Link } from 'react-router-dom'

import appStyles from '../app.module.scss'
import styles from './header.module.scss'
import logo from '../../assets/images/header/logo.svg'
import avatar from '../../assets/images/header/avatar.svg'

const Header = () => {
  const name = 'Имя'
  const surname = 'Фамилия'

  return (
    <header className={cn(appStyles.header, styles.wrapper)}>

      <div className={styles.column}>
        <img src={logo} alt="logotip" />
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