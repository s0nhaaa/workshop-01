interface CoinProps {
  x: number
  y: number
}

function Coin({ x, y }: CoinProps) {
  return (
    <div className='grid-cell z-10' style={{ transform: `translate3d(${16 * x + 'px'}, ${16 * y - 4 + 'px'}, 0)` }}>
      <div className="animate-bounce bg-[url('/coin.png')] grid-cell"></div>
      <div className="bg-[url('/coin-shadow.png')] grid-cell"></div>
    </div>
  )
}

interface CoinsProps {
  coins: Record<string, CoinProps> | undefined
}

export default function Coins({ coins }: CoinsProps) {
  return <>{coins && Object.values(coins).map((coin, index) => <Coin key={index} {...coin} />)}</>
}
