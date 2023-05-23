'use client'

import { getKeyString } from '@/helpers/get-key-string'
import { isSolid } from '@/helpers/is-solid'
import { useControl } from '@/hooks/useControl'
import { Player } from '@/types/player'
import { useEffect, useState } from 'react'

export function GameScene() {
  const coins: { [key: string]: string } = {}
  const [player, setPlayer] = useState<Player>({
    x: 5,
    y: 5,
    direction: 'right',
    color: 'blue',
    name: 'SONHA',
    coins: 0,
  })
  const [count, setCount] = useState(0)

  const increment = () => setCount((count) => ++count)
  const decrement = () => setCount((count) => --count)

  // useKeyPressEvent(']', increment, increment);
  // useKeyPressEvent('[', decrement, decrement);

  // useControl('ArrowUp', () => handleArrowPress(0, -1))
  // useControl('ArrowDown', () => handleArrowPress(0, 1))
  // useControl('ArrowLeft', () => handleArrowPress(-1, 0))
  // useControl('ArrowRight', () => handleArrowPress(1, 0))

  // const placeCoin = () => {
  //   const { x, y } = getRandomSafeSpot()
  //   const coinRef = ref(realtimeDB, `coins/${getKeyString(x, y)}`)
  //   set(coinRef, { x, y })

  //   const coinTimeOut = [2000, 3000, 4000, 5000]
  //   setTimeout(() => {
  //     placeCoin()
  //   }, randomFromArray(coinTimeOut))
  // }

  const attemptGrabCoin = (x: number, y: number) => {
    const key = getKeyString(x, y)
  }

  const handleArrowPress = (xChange = 0, yChange = 0) => {
    const newX = player.x + xChange
    const newY = player.y + yChange
    console.log(count)

    console.log(newX, newY)

    // let direction = player.direction

    // if (!isSolid(newX, newY)) {
    //   if (xChange === 1) direction = 'right'
    //   if (xChange === -1) direction = 'left'
    // }

    setPlayer((prev) => ({
      x: prev.x + xChange,
      y: prev.y + yChange,
      direction: 'right',
      color: 'blue',
      name: 'SONHA',
      coins: 0,
    }))

    // attemptGrabCoin(newX, newY)
  }

  return (
    <div className="bg-[url('/map.png')] relative w-60 h-52 scale-[3] pixelated" onClick={() => setCount(count + 1)}>
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
            "
          />
          <div className='absolute left-[-5px] text-[5px] text-[white] font-bold uppercase whitespace-nowrap px-0.5 py-px rounded-[3px] -top-3 bg-[#333]'>
            <span>{player.name}</span>
            <span className='text-[gold] ml-px'>
              {player.coins} {count}
            </span>
          </div>
          <div className=" absolute top-[-18px] w-[7px] h-[5px] left-[5px] bg-[url('/arrow.png')]"></div>
        </div>
      )}
    </div>
  )
}
