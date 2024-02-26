import { ComponentPropsWithoutRef, ElementType } from 'react'

import { ITypographyProps } from '@/components/typography'
import { clsx } from 'clsx'

import styles from './Typography.module.scss'
export const Typography = <T extends ElementType = 'p'>({
  as,
  className,
  variant = 'regularSmall',
  ...restProps
}: ITypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ITypographyProps<T>>) => {
  const Component = as || 'p'

  const classNames = clsx(styles[variant], className || null)

  return <Component className={classNames} {...restProps} />
}
