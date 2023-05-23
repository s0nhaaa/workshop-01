export const MAP_DATA = {
  minX: 1,
  maxX: 14,
  minY: 4,
  maxY: 12,
  blockedSpaces: <{ [key: string]: boolean }>{
    '1x11': true,
    '12x10': true,
    '7x4': true,
    '5x7': true,
    '9x6': true,
    '8x9': true,
  },
  banks: <{ [key: string]: boolean }>{
    '1x4': true,
    '2x4': true,
    '3x4': true,
    '4x4': true,
    '5x4': true,
  },
  pizzas: <{ [key: string]: boolean }>{
    '9x4': true,
    '10x4': true,
    '11x4': true,
    '12x4': true,
    '13x4': true,
  },
}

export type MapData = typeof MAP_DATA
