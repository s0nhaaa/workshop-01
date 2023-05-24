import { ScrollArea } from '@/components/ui/scroll-area'
import { PIZZA_DATA } from '@/configs/pizza-data'
import { ToastAction } from '@radix-ui/react-toast'
import Link from 'next/link'
import { Dispatch, SetStateAction, useState } from 'react'
import { PizzaCard } from './pizza-card'
import { Badge } from './ui/badge'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from './ui/sheet'
import { useToast } from './ui/use-toast'

interface PizzaMenuProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function PizzaMenu({ isOpen, setIsOpen }: PizzaMenuProps) {
  const { toast } = useToast()
  const [isPaying, setIsPaying] = useState(false)

  // Get connection using useConnection() hook

  // Get the secret key from .env

  // Generate keypair from secret key using Keypair.fromSecretKey(decode(secret))

  // Define the receiver publick key

  // Define the mint address

  // Get or create ATA for receive account

  // Get ATA of from account

  const pay = async (amount: number) => {
    setIsPaying(true)
    try {
      // Write the transfer function
      const tx = '2MrC3ZYTqkYxFHEJz1fEgtfS9WF59xKqjShWBzz379ZQaasaHGSG12d52TDwV4qQvp1cpKwTzQx8wxibZmyLN6uU'

      toast({
        title: 'Transaction Success!🎉',
        description: new Date().toString(),
        action: (
          <ToastAction altText='View on Explorer'>
            <Link target='_blank' href={`https://explorer.solana.com/tx/${tx}?cluster=devnet`}>
              Explorer
            </Link>
          </ToastAction>
        ),
      })
    } catch (error) {
      toast({
        title: 'Transaction Failed!',
        variant: 'destructive',
        description: new Date().toString(),
      })
    } finally {
      setIsPaying(false)
    }
  }

  return (
    <Sheet open={isOpen}>
      <SheetContent position='right' size='sm' onClose={() => setIsOpen(false)}>
        <SheetHeader>
          <SheetTitle className='flex items-center gap-2'>
            The hostest Summer Deal <Badge>-30%</Badge>
          </SheetTitle>
          <SheetDescription>Pick your favorite pizza and buy it directly.</SheetDescription>
        </SheetHeader>
        <div className='grid gap-4 py-4'>
          <ScrollArea className='h-[85vh] w-full rounded-md'>
            {PIZZA_DATA.map((pizza) => (
              <PizzaCard isPaying={isPaying} key={pizza.id} pizza={pizza} onPay={pay} />
            ))}
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  )
}
