import { Home } from '@/layout/main/sections/home'
import { CoffeeCards } from '@/layout/main/sections/сoffeeCards'

export const Main = () => {
  return (
    <main>
      <Home />
      <CoffeeCards endIndex={3} />
    </main>
  )
}
