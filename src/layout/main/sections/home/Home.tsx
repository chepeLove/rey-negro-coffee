import home from '@/assets/images/home.png'
import { Button } from '@/components/button'
import { Image } from '@/components/image'

import styles from './Home.module.scss'

export const Home = () => {
  return (
    <section className={styles.home} id={'home'}>
      <Image className={styles['home-image']} url={home} />
      <Button as={'a'} className={styles['home-button']} href={'#getPrice'}>
        ПОЛУЧИТЬ ОПТОВЫЙ ПРАЙС
      </Button>
    </section>
  )
}
