import { Pizza } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { Badge } from './ui/badge'

interface PizzaAlertProps {
  onPizza: boolean
}

export default function PizzaAlert({ onPizza }: PizzaAlertProps) {
  return (
    <>
      {onPizza && (
        <Alert className='absolute bottom-4 left-4 w-[250px]'>
          <Pizza className='h-4 w-4' />
          <AlertTitle className=' font-bold'>Pizza Time!</AlertTitle>
          <AlertDescription>
            Press <Badge>A</Badge> to open Menu
          </AlertDescription>
        </Alert>
      )}
    </>
  )
}
