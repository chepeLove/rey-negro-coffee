import { IAboutUsInfo } from '@/types'

type ContainerPositionType = 'center' | 'left' | 'right'
export interface IAboutUsProps extends IAboutUsInfo {
  containerPosition?: ContainerPositionType
  isShowContactUsButton?: boolean
}
