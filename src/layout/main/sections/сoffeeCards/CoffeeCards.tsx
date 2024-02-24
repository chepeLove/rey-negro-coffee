import { Container } from '@/components/container'
import { Card } from '@/components/сard'
import { cardItems } from '@/constants/cardItems'
import { ICoffeeCardsProps } from '@/layout/main/sections/сoffeeCards'

import styles from './CoffeCards.module.scss'

export const CoffeeCards = ({ endIndex, startIndex = 0 }: ICoffeeCardsProps) => {
  return (
    <section className={styles.coffeeCards}>
      <Container className={styles['coffeeCards-container']}>
        {cardItems.slice(startIndex, endIndex).map(item => (
          <Card {...item} key={item.id} />
        ))}
      </Container>
    </section>
  )
}
