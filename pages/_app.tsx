import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
