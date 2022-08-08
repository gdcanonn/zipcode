import { useState } from 'react'
import { ZipCode } from 'utils/@types'
import styles from './app.module.scss'
import ShowInfo from 'components/show-info/show-info'
import ZipCodeContainer from 'components/zip-code/zip-code-container'

function App() {
  const [zipCodeInfo, setZipCodeInfo] = useState<ZipCode | undefined>()
  const [zipCodeInfo2, setZipCodeInfo2] = useState<ZipCode | undefined>()
  const [zipCodeInfo3, setZipCodeInfo3] = useState<ZipCode | undefined>()

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>American Postal Code</h1>
      </header>
      <main>
        <section>
          <ZipCodeContainer onZipCodeInfo={setZipCodeInfo} />
          {zipCodeInfo && <ShowInfo {...zipCodeInfo} />}
        </section>
        <section>
          <ZipCodeContainer onZipCodeInfo={setZipCodeInfo2} />
          {zipCodeInfo2 && <ShowInfo {...zipCodeInfo2} />}
        </section>
        <section>
          <ZipCodeContainer onZipCodeInfo={setZipCodeInfo3} />
          {zipCodeInfo3 && <ShowInfo {...zipCodeInfo3} />}
        </section>
      </main>
      <footer className={styles.footer}>
        <h4>Developed by <i>German Cañon</i> &copy; 2022</h4>
      </footer>
    </div>
  )
}

export default App;
