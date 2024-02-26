import { ITextFieldProps } from '@/components/textField'

import styles from './TextField.module.scss'
export const TextField = ({
  name,
  onChange,
  placeholder,
  type = 'text',
  value,
}: ITextFieldProps) => {
  return (
    <input
      className={styles.field}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  )
}
