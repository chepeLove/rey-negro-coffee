import { Container } from '@/components/container/Container'
import { Menu } from '@/components/menu'
import { Typography } from '@/components/typography'

import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles['header-container']}>
        <Typography as={'h1'} className={styles['header-name']} variant={'h1'}>
          REY NEGRO
        </Typography>
        <Menu />
      </Container>
    </header>
  )
}
