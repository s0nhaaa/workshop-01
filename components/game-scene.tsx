'use client'

import { PlayerColor } from '@/configs/player-color'
import { getKeyString } from '@/helpers/get-key-string'
import { getRandomSafeSpot } from '@/helpers/get-random-safe-spot'
import { isOnBank } from '@/helpers/is-on-bank'
import { isOnPizza } from '@/helpers/is-on-pizza'
import { isSolid } from '@/helpers/is-solid'
import { randomFromArray } from '@/helpers/random-from-array'
import { Player as PlayerType } from '@/types/player'
import { useEffect, useState } from 'react'
import { useKeyPressEvent } from 'react-use'
import BankAlert from './bank-alert'
import Coins from './coins'
import PizzaAlert from './pizza-alert'
import PizzaMenu from './pizza-menu'
import Player from './player'

export function GameScene() {
  const [coins, setCoins] = useState<Record<string, { x: number; y: number }>>({
    '5x5': {
      x: 5,
      y: 5,
    },
  })
  const [player, setPlayer] = useState<PlayerType>({
    x: 5,
    y: 5,
    direction: 'right',
    color: 'blue',
    name: 'SONHA',
    coins: 0,
  })
  const [onBank, setOnBank] = useState(false)
  const [onPizza, setOnPizza] = useState(false)
  const [isOpenPizzaMenu, setIsOpenPizzaMenu] = useState(false)

  useKeyPressEvent('ArrowUp', () => handleArrowPress(0, -1))
  useKeyPressEvent('ArrowDown', () => handleArrowPress(0, 1))
  useKeyPressEvent('ArrowLeft', () => handleArrowPress(-1, 0))
  useKeyPressEvent('ArrowRight', () => handleArrowPress(1, 0))

  useKeyPressEvent('a', () => onPizza && setIsOpenPizzaMenu(true))

  useKeyPressEvent('1', () => changeSkinColor('blue'))
  useKeyPressEvent('2', () => changeSkinColor('green'))
  useKeyPressEvent('3', () => changeSkinColor('orange'))
  useKeyPressEvent('4', () => changeSkinColor('purple'))
  useKeyPressEvent('5', () => changeSkinColor('red'))
  useKeyPressEvent('6', () => changeSkinColor('yellow'))

  const changeSkinColor = (color: PlayerColor) => {
    setPlayer({ ...player, color })
  }

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

    setOnBank(isOnBank(newX, newY))
    setOnPizza(isOnPizza(newX, newY))

    attemptGrabCoin(newX, newY)
  }

  return (
    <>
      <div className="bg-[url('/map.png')] relative w-60 h-52 scale-[3] pixelated z-0">
        <Player player={player} />
        <Coins coins={coins} />
      </div>
      <div className='absolute inset-0 w-full h-full'>
        <BankAlert onBank={onBank} />
        <PizzaAlert onPizza={onPizza} />

        <PizzaMenu isOpen={isOpenPizzaMenu} setIsOpen={setIsOpenPizzaMenu} />
      </div>
    </>
  )
}
