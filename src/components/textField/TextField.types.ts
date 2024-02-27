import { ChangeEvent } from 'react'

type TextFiledType = 'email' | 'tel' | 'text'
export interface ITextFieldProps {
  name?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: TextFiledType
  value?: string
}
