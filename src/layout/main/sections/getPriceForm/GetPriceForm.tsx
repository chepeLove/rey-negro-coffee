import coffeeImageLeft from '@/assets/images/get-price-form-1.png'
import coffeeImageRight from '@/assets/images/get-price-form-2.png'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Image } from '@/components/image'
import { TextField } from '@/components/textField'
import { Typography } from '@/components/typography'

import styles from './GetPriceForm.module.scss'

export const GetPriceForm = () => {
  return (
    <section className={styles.getPriceForm}>
      <Container className={styles['getPriceForm-container']} direction={'column'}>
        <Image className={styles['getPriceForm-container-image-left']} url={coffeeImageLeft} />
        <Image className={styles['getPriceForm-container-image-right']} url={coffeeImageRight} />
        <Typography as={'h1'} className={styles['getPriceForm-title']} variant={'h1'}>
          {'ПОЛУЧИ '}
          <Typography as={'span'} variant={'h1'}>
            {'ОПТОВЫЙ ПРАЙС'}
          </Typography>
          {' ПРЯМО СЕЙЧА'}
        </Typography>
        <Container className={styles['getPriceForm-content-box']}>
          <Container className={styles['getPriceForm-content-box-text']} direction={'column'}>
            <Typography as={'h2'} variant={'h2'}>
              ПРЕДЛОЖЕНИЕ ДЛЯ КОРПОРАТИВНЫХ КЛИЕНТОВ
            </Typography>
            <Typography variant={'regularBig'}>
              Индивидуальные условия! Для бизнеса, для офисов, ресторанов, кофеен, отелей
            </Typography>
          </Container>
          <form className={styles['getPriceForm-form']}>
            <TextField placeholder={'имя'} />
            <TextField placeholder={'e-mail'} type={'email'} />
            <TextField placeholder={'телефон'} type={'tel'} />
            <Button fullWidth type={'submit'} variant={'secondary'}>
              ПОЛУЧИТЬ ОПТОВЫЙ ПРАЙС
            </Button>
          </form>
        </Container>
      </Container>
    </section>
  )
}
