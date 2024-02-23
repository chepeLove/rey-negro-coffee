import { IButton } from '@/components/button'
import { clsx } from 'clsx'

import styles from './Button.module.scss'

export const Button = ({ className, fullWidth, variant = 'primary', ...restProps }: IButton) => {
  const classNames = clsx(styles.button, styles[variant], fullWidth && styles.fullWidth, className)

  return <button className={classNames} {...restProps} />
}
