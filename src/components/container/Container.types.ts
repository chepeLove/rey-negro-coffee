import { ComponentPropsWithoutRef } from 'react'

type CursorType = 'default' | 'pointer'
type DirectionType = 'column' | 'row'
export interface IContainerProps extends ComponentPropsWithoutRef<'div'> {
  cursor?: CursorType
  direction?: DirectionType
}
