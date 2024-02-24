import { ElementType } from 'react'

import { IButtonProps } from '@/components/button'
import { clsx } from 'clsx'

import styles from './Button.module.scss'

export const Button = <T extends ElementType>({
  as,
  className,
  fullWidth,
  variant = 'primary',
  ...restProps
}: IButtonProps<T>) => {
  const classNames = clsx(styles.button, styles[variant], fullWidth && styles.fullWidth, className)
  const Tag: ElementType = as || 'button'

  return <Tag className={classNames} {...restProps} />
}
