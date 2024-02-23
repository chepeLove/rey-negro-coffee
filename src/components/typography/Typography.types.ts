import { ElementType, ReactNode } from 'react'

type VariantType = 'bold' | 'h1' | 'h2' | 'h3' | 'regular'

export interface ITypographyProps<T extends ElementType> {
  as?: T
  children?: ReactNode
  className?: string
  variant?: VariantType
}
