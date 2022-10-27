import { useState } from 'react'
import { fetchAddresses } from '../../api'
import SearchingForm from './SearchingForm'
import { Loader } from '../'
import styles from './searching.module.scss'

type Address = {
  value: string
}

type FetchResponse = {
  suggestions: Address[]
}


const Searching = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [addresses, setAddresses] = useState<Address[] | null>(null)

  const getAddresses = async (query: string) => {
    try {
      setAddresses(null)
      setLoading(true)
      const response = await fetchAddresses<FetchResponse>({ query, count: 20 })
      setAddresses(response.suggestions)
    } catch (error) {
      console.log('err: ', error)
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className={styles.wrapper}>
      <h1>Поиск адресов</h1>
      <h3>Введите интересующий вас адрес</h3>

      <SearchingForm onSubmit={getAddresses} loading={loading} />

      {loading && <Loader />}

      {addresses &&
        <section className={styles.addresses}>
          {addresses.length > 0
            ? <>
              <h2>Адреса</h2>
              <ul>
                {addresses.map(address => (
                  <li key={address.value}>{address.value}</li>
                ))}
              </ul>
            </>
            : <div className={styles.notFound}>Похожих адресов не найдено</div>
          }
        </section>
      }
    </div>

  )
}

export default Searching