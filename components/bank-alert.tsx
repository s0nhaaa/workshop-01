import { Coins } from 'lucide-react'
import React from 'react'
import { Alert, AlertDescription, AlertTitle } from './ui/alert'
import { Badge } from './ui/badge'

interface BankAlertProps {
  onBank: boolean
}

export default function BankAlert({ onBank }: BankAlertProps) {
  return (
    <>
      {onBank && (
        <Alert className='absolute bottom-4 left-4 w-[250px]'>
          <Coins className='h-4 w-4' />
          <AlertTitle className=' font-bold'>Welcome to SOL Bank!</AlertTitle>
          <AlertDescription>
            Press <Badge>A</Badge> to get 2 SOL
          </AlertDescription>
        </Alert>
      )}
    </>
  )
}
