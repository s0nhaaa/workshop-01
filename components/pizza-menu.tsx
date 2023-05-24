import { ScrollArea } from '@/components/ui/scroll-area'
import { PIZZA_DATA } from '@/configs/pizza-data'
import { ToastAction } from '@radix-ui/react-toast'
import { getAssociatedTokenAddressSync, transfer } from '@solana/spl-token'
import { useConnection } from '@solana/wallet-adapter-react'
import { Keypair, PublicKey } from '@solana/web3.js'
import { decode } from 'bs58'
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
  const { connection } = useConnection()
  const secret = '3HFAkDhHgYJGT173pcVkLRgzvTjNTK6baTQ7ociS4Aq8byFEJv1y32m4fugWLUKGXuVJENyYxEPXPo718PQMbfVh'
  const fromWallet = Keypair.fromSecretKey(decode(secret))
  const toWallet = new PublicKey('Hb2HDX6tnRfw5j442npy58Z2GBzJA58Nz7ipouWGT63p')
  const mint = new PublicKey('3Mq7ukS7xygbtGtvNwavKuXHZ1W6QqwdwDsT16APeW8i')
  const toTokenAccount = getAssociatedTokenAddressSync(mint, toWallet)
  const fromTokenAccount = getAssociatedTokenAddressSync(mint, fromWallet.publicKey)
  const { toast } = useToast()
  const [isPaying, setIsPaying] = useState(false)

  const pay = async (amount: number) => {
    setIsPaying(true)
    try {
      const tx = await transfer(
        connection,
        fromWallet,
        fromTokenAccount,
        toTokenAccount,
        fromWallet,
        amount * Math.pow(10, 9),
      )
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
