import { globalStyles } from "../styles/global"
import { Container } from "../styles/pages/app"
import { Header } from "../components/Header"
import { ShoppingCartProvider } from "../context/ShoppingCartContext"

globalStyles()

export default function App({ Component, pageProps }) {

  return (
    <ShoppingCartProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </ShoppingCartProvider>
  )
}