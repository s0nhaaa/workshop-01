export const MAP_DATA = {
  minX: 1,
  maxX: 14,
  minY: 4,
  maxY: 12,
  blockedSpaces: <{ [key: string]: boolean }>{
    '1x11': true,
    '12x10': true,
    '5x7': true,
    '9x6': true,
    '8x9': true,
  },
}

export type MapData = typeof MAP_DATA
