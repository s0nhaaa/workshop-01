import { Toaster } from '@/components/toaster'
import '@/styles/globals.css'
import { Source_Sans_Pro } from 'next/font/google'

const sourceSans = Source_Sans_Pro({ weight: ['400', '700'], subsets: ['vietnamese'] })

export const metadata = {
  title: 'Coco Ground',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={sourceSans.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
