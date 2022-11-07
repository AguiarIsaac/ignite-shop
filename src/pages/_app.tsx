import { globalStyles } from "../styles/global"
import logoImg from "../assets/logo.svg"
import { Container, Header } from "../styles/pages/app"

import Image from 'next/image'

globalStyles()

export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}


