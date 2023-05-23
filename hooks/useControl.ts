import { useEffect } from 'react'

export const useControl = (keyCode: string, callback: () => void) => {
  useEffect(() => {
    let keySafe = true

    const onKeydown = (e: KeyboardEvent) => {
      if (e.code === keyCode) {
        // console.log(`Key ${e.code} down!`)
        if (keySafe) {
          keySafe = false
          callback()
        }
      }
    }

    const onKeyup = (e: KeyboardEvent) => {
      if (e.code === keyCode) {
        // console.log(`Key ${e.code} up!`)
        keySafe = true
      }
    }

    document.addEventListener('keydown', onKeydown)
    document.addEventListener('keyup', onKeyup)

    return () => {
      document.removeEventListener('keydown', onKeydown)
      document.removeEventListener('keyup', onKeyup)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return
}
