import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Image } from '@/components/image'
import { Typography } from '@/components/typography'
import { IAboutUsProps } from '@/layout/main/sections/aboutUs'
import { clsx } from 'clsx'

import styles from './AboutUs.module.scss'

export const AboutUs = ({
  containerPosition = 'center',
  image,
  isShowContactUsButton,
  text,
  title,
}: IAboutUsProps) => {
  const classNamesContainer = clsx(
    styles['aboutUs-container'],
    styles[`aboutUs-container-${containerPosition}`]
  )

  return (
    <section className={styles.aboutUs}>
      <Image className={styles['aboutUs-image']} url={image} />
      <Container className={classNamesContainer} direction={'column'}>
        <Typography as={'h1'} variant={'h1'}>
          {title}
        </Typography>
        <Typography as={'span'} variant={'regularBig'}>
          {text}
        </Typography>
        {isShowContactUsButton && (
          <Button as={'a'} variant={'secondary'}>
            СВЯЗАТЬСЯ С НАМИ
          </Button>
        )}
      </Container>
    </section>
  )
}
