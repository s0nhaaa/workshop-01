import { PlayerColor } from '@/configs/player-color'

export type Player = {
  x: number
  y: number
  direction: 'right' | 'left'
  color: PlayerColor
  name: string
  coins: number
}
