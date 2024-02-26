import { aboutUsInfo } from '@/constants/aboutUsInfo'
import { Footer } from '@/layout/footer'
import { AboutUs } from '@/layout/main/sections/aboutUs'
import { GetPriceForm } from '@/layout/main/sections/getPriceForm'
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
      <GetPriceForm />
      <Footer />
    </main>
  )
}
