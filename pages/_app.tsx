import '../index.css'
import type { AppProps } from 'next/app'
import { Montserrat } from '@next/font/google'
import classNames from 'classnames'
import { SessionProvider } from 'next-auth/react'
import Header from 'components/Header'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <main
      className={classNames([montserrat.className, 'container mx-auto px-6'])}>
      <SessionProvider session={session}>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  )
}
