type TextFiledType = 'email' | 'tel' | 'text'
export interface ITextFieldProps {
  name?: string
  onChange?: () => void
  placeholder?: string
  type?: TextFiledType
  value?: string
}
