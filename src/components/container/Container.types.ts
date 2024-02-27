import { ComponentPropsWithoutRef } from 'react'

type DirectionType = 'column' | 'row'
export interface IContainerProps extends ComponentPropsWithoutRef<'div'> {
  direction?: DirectionType
}
