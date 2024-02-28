import { FormEvent } from 'react'

import coffeeImageLeft from '@/assets/images/get-price-form-1.png'
import coffeeImageRight from '@/assets/images/get-price-form-2.png'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Image } from '@/components/image'
import { TextField } from '@/components/textField'
import { Typography } from '@/components/typography'

import styles from './GetPriceForm.module.scss'

export const GetPriceForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')

    console.info('Отправленные данные:', email, name, phone)
  }

  return (
    <section className={styles['get-price-form']} id={'get-price'}>
      <Container className={styles['get-price-form-container']} direction={'column'}>
        <Image className={styles['get-price-form-container-image-left']} url={coffeeImageLeft} />
        <Image className={styles['get-price-form-container-image-right']} url={coffeeImageRight} />
        <Typography as={'h1'} className={styles['get-price-form-title']} variant={'h1'}>
          {'ПОЛУЧИ '}
          <Typography as={'span'} variant={'h1'}>
            {'ОПТОВЫЙ ПРАЙС'}
          </Typography>
          {' ПРЯМО СЕЙЧАС!'}
        </Typography>
        <Container className={styles['get-price-form-content-box']}>
          <Container className={styles['get-price-form-content-box-text']} direction={'column'}>
            <Typography
              as={'h2'}
              className={styles['get-price-form-content-box-text-title']}
              variant={'h2'}
            >
              {'ПРЕДЛОЖЕНИЕ ' + ' ДЛЯ КОРПОРАТИВНЫХ' + ' КЛИЕНТОВ'}
            </Typography>
            <Typography
              className={styles['get-price-form-content-box-text-content']}
              variant={'regularBig'}
            >
              Индивидуальные условия! Для бизнеса, для офисов, ресторанов, кофеен, отелей
            </Typography>
          </Container>
          <form className={styles['get-price-form-form']} onSubmit={handleSubmit}>
            <TextField name={'name'} placeholder={'имя'} />
            <TextField name={'email'} placeholder={'e-mail'} type={'email'} />
            <TextField name={'phone'} placeholder={'телефон'} type={'tel'} />
            <Button fullWidth type={'submit'} variant={'secondary'}>
              ПОЛУЧИТЬ ОПТОВЫЙ ПРАЙС
            </Button>
          </form>
        </Container>
      </Container>
    </section>
  )
}
