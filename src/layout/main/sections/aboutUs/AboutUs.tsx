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
    styles['about-us-container-text'],
    styles[`about-us-container-text-${containerPosition}`]
  )

  return (
    <section className={styles['about-us']}>
      <Container className={styles['about-us-container']} direction={'column'}>
        <Image className={styles['about-us-container-image']} url={image} />
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
      </Container>
    </section>
  )
}
