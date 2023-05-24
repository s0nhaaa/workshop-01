import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { TOKEN_SYMBOL } from '@/configs/token-symbol'
import { cn } from '@/lib/utils'
import { Pizza } from '@/types/pizza'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'

type CardProps = React.ComponentProps<typeof Card> & { pizza: Pizza }

export function PizzaCard({ pizza, className, ...props }: CardProps) {
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
        <Button className='w-full'>
          Buy with ${pizza.price} {TOKEN_SYMBOL}
        </Button>
      </CardFooter>
    </Card>
  )
}
