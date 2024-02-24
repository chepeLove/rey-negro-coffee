import { ComponentPropsWithoutRef, ElementType } from 'react'

type VariantType = 'primary' | 'secondary'
export interface IButtonOwnProps<T extends ElementType> {
  as?: T
  fullWidth?: boolean
  variant?: VariantType
}

export type IButtonProps<T extends ElementType = 'button'> = IButtonOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof IButtonOwnProps<T>>
