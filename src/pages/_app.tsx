import "../styles/globals.css"
import type { AppProps } from "next/app"
import { StoreProvider } from "easy-peasy"
import store from "../store/store"
import { SessionProvider } from "next-auth/react"
import { NextUIProvider } from "@nextui-org/react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <StoreProvider store={store}>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </StoreProvider>
    </SessionProvider>
  )
}

export default MyApp
