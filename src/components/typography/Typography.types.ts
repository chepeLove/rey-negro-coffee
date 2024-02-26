import { ElementType, ReactNode } from 'react'

type VariantType = 'bold' | 'h1' | 'h2' | 'h3' | 'regularBig' | 'regularSmall'

export interface ITypographyProps<T extends ElementType> {
  as?: T
  children?: ReactNode
  className?: string
  variant?: VariantType
}
