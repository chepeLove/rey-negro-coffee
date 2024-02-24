import { IImageProps } from '@/components/image'
import { clsx } from 'clsx'

import styles from './Image.module.scss'
export const Image = ({ alt, className, height, onClick, url, width }: IImageProps) => {
  const classNames = clsx(styles['image'], className)

  return (
    <img
      alt={alt}
      className={classNames}
      onClick={onClick}
      src={url}
      style={{ height: `${height}px`, width: `${width}px` }}
    />
  )
}
