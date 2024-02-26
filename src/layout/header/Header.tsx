import { Logo } from '@/assets/icons'
import { Container } from '@/components/container/Container'
import { Menu } from '@/components/menu'

import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles['header-container']}>
        <Logo height={'48'} width={'230'} />
        <Menu />
      </Container>
    </header>
  )
}
