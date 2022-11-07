import { globalStyles } from "../styles/global"
import logoImg from "../assets/logo.svg"
import { Container, Header } from "../styles/pages/app"

import Image from 'next/image'
import Link from "next/link"
import { Handbag } from "phosphor-react"

globalStyles()

export default function App({ Component, pageProps }) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <Link href="#">
          <a><Handbag size={32} /></a>
        </Link>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}


