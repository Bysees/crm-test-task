// import cn from 'classnames'
import { FormEvent, ChangeEvent, useState, FC } from 'react'
import styles from './searching.module.scss'

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
      <button disabled={loading}>Поиск</button>
    </form>
  )
}

export default SearchingForm