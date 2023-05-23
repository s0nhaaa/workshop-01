export const randomFromArray = <T>(array: T[]): T => {
  if (array.length === 0) {
    throw new Error('The array is empty')
  }

  return array[Math.floor(Math.random() * array.length)]
}
