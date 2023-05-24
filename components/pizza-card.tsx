import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { COIN_SYMBOL } from '@/configs/coin-symbol'
import { cn } from '@/lib/utils'
import { Pizza } from '@/types/pizza'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'

type PizzaCardProps = React.ComponentProps<typeof Card> & {
  pizza: Pizza
  onPay: (amount: number) => void
  isPaying: boolean
}

export function PizzaCard({ isPaying, onPay, pizza, className, ...props }: PizzaCardProps) {
  return (
    <Card className={cn('w-full my-4', className)} {...props}>
      <CardHeader>
        <CardTitle>{pizza.name}</CardTitle>
        <CardDescription>{pizza.description}</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <AspectRatio ratio={16 / 9} className='bg-muted'>
          <Image src={pizza.image} alt={pizza.name} fill className='rounded-md object-cover' />
        </AspectRatio>
      </CardContent>
      <CardFooter>
        <Button disabled={isPaying} onClick={() => onPay(pizza.price)} className='w-full'>
          {isPaying && <Loader2 className='mr-2 h-4 w-4 animate-spin' />} Buy with ${pizza.price} {COIN_SYMBOL}
        </Button>
      </CardFooter>
    </Card>
  )
}
