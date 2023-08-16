import './globals.css'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'

const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lista de países com next 13',
  description: 'Aplicação do desafio codante',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={nunitoSans.className}>
          <main className='bg-gray-100 min-h-screen'>
            <nav className='w-full bg-white h-16 flex items-center justify-center'>
              <section className='container flex items-center'>
                <h1 className='font-bold text-2xl'>Minha lista de paises</h1>
              </section>
            </nav>
            {children}
          </main>
        </body>
    </html>
  )
}
