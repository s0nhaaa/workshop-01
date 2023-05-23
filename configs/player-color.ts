export const PLAYER_COLORS = ['blue', 'red', 'orange', 'yellow', 'green', 'purple'] as const

export type PlayerColor = (typeof PLAYER_COLORS)[number]
