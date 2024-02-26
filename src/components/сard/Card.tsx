import { Ozon, Wildberries } from '@/assets/icons'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Image } from '@/components/image'
import { Typography } from '@/components/typography'
import { ICardProps } from '@/components/сard'

import styles from './Card.module.scss'

export const Card = ({
  compound,
  gost,
  image,
  storageConditions,
  subtitle,
  term,
  title,
  weight,
}: ICardProps) => {
  return (
    <Container className={styles.card} direction={'column'}>
      <Image url={image} />
      <Container className={styles['card-wrapper']} direction={'column'}>
        <Typography as={'h3'} variant={'h3'}>
          {title}
        </Typography>
        <Typography as={'h4'} className={styles['card-subtitle']} variant={'regularSmall'}>
          {subtitle}
        </Typography>
        <div>
          <Typography>
            <Typography as={'span'} variant={'bold'}>
              {`Состав:` + ' '}
            </Typography>
            {compound}
          </Typography>
          <Typography>
            <Typography as={'span'} variant={'bold'}>
              {`Условия хранения:` + ' '}
            </Typography>
            {storageConditions}
          </Typography>
          <Typography>
            <Typography as={'span'} variant={'bold'}>
              {`Срок годности:` + ' '}
            </Typography>
            {term}
          </Typography>
          <Typography>
            <Typography as={'span'} variant={'bold'}>
              {`Масса нетто:` + ' '}
            </Typography>
            {weight}
          </Typography>
          <Typography>
            <Typography as={'span'} variant={'bold'}>
              {`Гост` + ' '}
            </Typography>
            {gost}
          </Typography>
        </div>
        <Container className={styles['card-buttons']}>
          <Button as={'a'} variant={'secondary'}>
            КУПИТЬ НА
            <Ozon />
          </Button>
          <Button as={'a'} variant={'secondary'}>
            КУПИТЬ НА
            <Wildberries />
          </Button>
        </Container>
      </Container>
    </Container>
  )
}
