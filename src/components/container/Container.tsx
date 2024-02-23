import { IContainerProps } from '@/components/container/Container.types'
import { clsx } from 'clsx'

import styles from './Container.module.scss'

export const Container = ({
  className,
  cursor = 'default',
  direction = 'row',
  ...restProps
}: IContainerProps) => {
  const classNames = clsx(className, styles.container, styles[`container-${direction}`])

  return <div className={classNames} style={{ cursor: cursor }} {...restProps} />
}
