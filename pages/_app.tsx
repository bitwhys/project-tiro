import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { cx } from 'class-variance-authority'
import { catalinaFont } from '@/fonts/catalina/catalina-next-font'
import { visbyFont } from '@/fonts/visby/visby-next-font'

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <div className={cx(catalinaFont.variable, visbyFont.variable, 'font-sans')}>
      <Component {...pageProps} />
    </div>
  )
}
