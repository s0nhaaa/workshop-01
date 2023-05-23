import { BellRing, Glasses, Puzzle, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Dispatch, SetStateAction } from 'react'

interface SkinModalProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function SkinModal({ isOpen, setIsOpen }: SkinModalProps) {
  return (
    <>
      {isOpen && (
        <>
          <div className='absolute inset-0 z-20 bg-slate-900 opacity-[0.2]' />
          <div className='absolute inset-0 z-30 flex select-none items-center justify-center'>
            <div className='relative h-fit w-[50vw] select-none rounded-lg bg-background'>
              <Button
                className='absolute right-4 top-4 h-9 w-9 p-1'
                variant={'outline'}
                onClick={() => setIsOpen(false)}>
                <X size={16} />
              </Button>
              <Card className='w-full'>
                <CardHeader>
                  <CardTitle className='flex flex-col gap-2'>Skins Store</CardTitle>
                  <CardDescription className='flex flex-col gap-2'>Made by 8 minutes ago</CardDescription>
                </CardHeader>
                <CardContent className=''>
                  <ScrollArea className=' h-[300px] w-full'>
                    <div className='grid gap-3'>
                      {Array(10)
                        .fill(0)
                        .map((_, i) => (
                          <div key={i} className=' flex w-full space-x-4 rounded-md border p-4'>
                            <BellRing />
                            <div className='flex-1 space-y-1'>
                              <p className='text-sm font-medium leading-none'>Wrapper SOL</p>
                              <p className='text-sm text-muted-foreground'>
                                Hb2HDX6tnRfw5j442npy58Z2GBzJA58Nz7ipouWGT63p
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </ScrollArea>
                </CardContent>
                <CardFooter className=' flex-row-reverse gap-2'>
                  <Button>
                    <Puzzle className='mr-2 h-4 w-4' /> Mint transaction as NFT
                  </Button>
                  <Button variant={'outline'}>
                    <Glasses className='mr-2 h-4 w-4' /> View on Shyft Transalator
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </>
      )}
    </>
  )
}
