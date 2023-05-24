import { GameScene } from '@/components/game-scene'
import { MainNav } from '@/components/main-nav'
import WalletAdaper from '@/components/wallet-adaper'

export default function Home() {
  return (
    <WalletAdaper>
      <MainNav />
      <main className='overflow-hidden bg-gradient-linear flex items-center justify-center w-full h-screen'>
        <GameScene />
      </main>
    </WalletAdaper>
  )
}
