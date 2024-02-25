import { aboutUsInfo } from '@/constants/aboutUsInfo'
import { AboutUs } from '@/layout/main/sections/aboutUs'
import { Home } from '@/layout/main/sections/home'
import { CoffeeCards } from '@/layout/main/sections/сoffeeCards'

export const Main = () => {
  return (
    <main>
      <Home />
      <CoffeeCards endIndex={3} />
      <AboutUs {...aboutUsInfo[0]} />
      <CoffeeCards endIndex={6} startIndex={3} />
      <AboutUs {...aboutUsInfo[1]} containerPosition={'left'} isShowContactUsButton />
      <CoffeeCards startIndex={6} />
      <AboutUs {...aboutUsInfo[2]} containerPosition={'right'} />
    </main>
  )
}
