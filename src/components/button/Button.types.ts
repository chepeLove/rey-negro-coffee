import { ComponentPropsWithoutRef } from 'react'

type VariantType = 'primary' | 'secondary'
export interface IButton extends ComponentPropsWithoutRef<'button'> {
  fullWidth?: boolean
  variant?: VariantType
}
