import { FormEvent, ChangeEvent, useState, FC } from 'react'
import styles from './searching.module.scss'
import loupe from '../../assets/images/menu_bar/loupe-white.svg'

type Props = {
  loading: boolean
  onSubmit: (query: string) => Promise<void>
}


const SearchingForm: FC<Props> = ({ loading, onSubmit }) => {
  const [query, setQuery] = useState<string>('');

  const onSumbitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (query.length < 3) return
    await onSubmit(query)
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <form onSubmit={onSumbitHandler} className={styles.form}>
      <input value={query} onChange={onChangeHandler} />
      <button disabled={loading}>
        <img src={loupe} alt="icon" />
        <span>Поиск</span>
      </button>
    </form>
  )
}

export default SearchingForm