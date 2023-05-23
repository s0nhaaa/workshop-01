'use client'

import { getKeyString } from '@/helpers/get-key-string'
import { getRandomSafeSpot } from '@/helpers/get-random-safe-spot'
import { isSolid } from '@/helpers/is-solid'
import { randomFromArray } from '@/helpers/random-from-array'
import { Player } from '@/types/player'
import { useEffect, useState } from 'react'
import { useKeyPressEvent } from 'react-use'

export function GameScene() {
  const [coins, setCoins] = useState<{ [key: string]: { x: number; y: number } }>({
    '5x5': {
      x: 5,
      y: 5,
    },
  })
  const [player, setPlayer] = useState<Player>({
    x: 5,
    y: 5,
    direction: 'right',
    color: 'blue',
    name: 'SONHA',
    coins: 0,
  })

  useKeyPressEvent('ArrowUp', () => handleArrowPress(0, -1))
  useKeyPressEvent('ArrowDown', () => handleArrowPress(0, 1))
  useKeyPressEvent('ArrowLeft', () => handleArrowPress(-1, 0))
  useKeyPressEvent('ArrowRight', () => handleArrowPress(1, 0))

  useEffect(() => {
    const placeCoin = () => {
      const { x, y } = getRandomSafeSpot()
      setCoins((prev) => ({ ...prev, [getKeyString(x, y)]: { x, y } }))

      const coinTimeOut = [2000, 3000, 4000, 5000]
      setTimeout(() => {
        placeCoin()
      }, randomFromArray(coinTimeOut))
    }

    placeCoin()
  }, [])

  const attemptGrabCoin = (x: number, y: number) => {
    const coinKey = getKeyString(x, y)
    if (coins[coinKey]) {
      setCoins((prevCoins) => {
        const newCoins = { ...prevCoins }
        delete newCoins[coinKey]
        return newCoins
      })
      setPlayer((prevPlayer) => ({
        ...prevPlayer,
        coins: prevPlayer.coins + 1,
      }))
    }
  }

  const handleArrowPress = (xChange = 0, yChange = 0) => {
    const newX = player.x + xChange
    const newY = player.y + yChange

    let direction = player.direction

    if (!isSolid(newX, newY)) {
      if (xChange === 1) direction = 'right'
      if (xChange === -1) direction = 'left'

      setPlayer((prev) => ({
        ...prev,
        x: newX,
        y: newY,
        direction,
      }))
    }

    attemptGrabCoin(newX, newY)
  }

  return (
    <div className="bg-[url('/map.png')] relative w-60 h-52 scale-[3] pixelated">
      {player && (
        <div
          className='transition-transform duration-[0.4s] grid-cell group'
          data-color={player.color}
          data-direction={player.direction}
          style={{ transform: `translate3d(${16 * player.x + 'px'}, ${16 * player.y - 4 + 'px'}, 0)` }}>
          <div className="bg-[url('/shadow.png')] grid-cell" />
          <div
            className="
              bg-[url('/characters.png')] 
              grid-cell
              group-data-[color=red]:character-red 
              group-data-[color=orange]:character-orange
              group-data-[color=yellow]:character-yellow
              group-data-[color=green]:character-green
              group-data-[color=purple]:character-purple
              group-data-[direction=right]:character-direction-right
              will-change-transform
              z-10
            "
          />
          <div className='absolute left-[-5px] text-[5px] text-[white] font-bold uppercase whitespace-nowrap px-0.5 py-px rounded-[3px] -top-3 bg-[#333]'>
            <span>{player.name}</span>
            <span className='text-[gold] ml-px'>{player.coins}</span>
          </div>
          <div className=" absolute top-[-18px] w-[7px] h-[5px] left-[5px] bg-[url('/arrow.png')]"></div>
        </div>
      )}

      {coins &&
        Object.values(coins).map((coin, index) => (
          <div
            key={index}
            className='grid-cell'
            style={{ transform: `translate3d(${16 * coin.x + 'px'}, ${16 * coin.y - 4 + 'px'}, 0)` }}>
            <div className="animate-bounce bg-[url('/coin.png')] grid-cell"></div>
            <div className="bg-[url('/coin-shadow.png')] grid-cell"></div>
          </div>
        ))}
    </div>
  )
}
