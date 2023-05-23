import { PIZZA_DATA } from '@/configs/pizza-data'
import { Dispatch, SetStateAction } from 'react'
import { PizzaCard } from './pizza-card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from './ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'

interface PizzaMenuProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
export default function PizzaMenu({ isOpen, setIsOpen }: PizzaMenuProps) {
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
              <PizzaCard key={pizza.id} pizza={pizza} />
            ))}
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  )
}
