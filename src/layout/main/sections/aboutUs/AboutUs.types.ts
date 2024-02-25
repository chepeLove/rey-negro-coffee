import { IAboutUsInfo } from '@/constants/aboutUsInfo'

type ContainerPositionType = 'center' | 'left' | 'right'
export interface IAboutUsProps extends IAboutUsInfo {
  containerPosition?: ContainerPositionType
  isShowContactUsButton?: boolean
}
