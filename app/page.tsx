import { GameScene } from '@/components/game-scene'
import { MainNav } from '@/components/main-nav'

export default function Home() {
  return (
    <main className='overflow-hidden bg-gradient-linear flex items-center justify-center w-full h-screen'>
      <GameScene />
    </main>
  )
}
