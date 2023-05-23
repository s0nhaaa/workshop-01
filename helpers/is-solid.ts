import { MAP_DATA } from '@/configs/map-data'
import { getKeyString } from './get-key-string'

export const isSolid = (x: number, y: number) => {
  const blockedNextSpace = MAP_DATA.blockedSpaces[getKeyString(x, y)]

  return blockedNextSpace || x >= MAP_DATA.maxX || x < MAP_DATA.minX || y >= MAP_DATA.maxY || y < MAP_DATA.minY
}
