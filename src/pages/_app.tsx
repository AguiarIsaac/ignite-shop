import { globalStyles } from "../styles/global"
import logoImg from "../assets/logo.svg"
import { Container, Header, ShoppingCart } from "../styles/pages/app"
import Image from 'next/image'
import Link from "next/link"
import { Handbag, X } from "phosphor-react"
import { useState } from "react"

globalStyles()

export default function App({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState('')

  function handleOpenMenu() {
    if(cartItems === '') {
      setCartItems('active')
    } else {
      setCartItems('')
    }
  }
  
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <Link href="#">
          <button type="button" onClick={handleOpenMenu} title="Open Cart"><Handbag size={32} /></button>
        </Link>
      </Header>

      <ShoppingCart className={cartItems}>
        <button type="button" onClick={handleOpenMenu} title="close Cart">
          <X size={32} /> 
        </button>
      </ShoppingCart>

      <Component {...pageProps} />
    </Container>
  )
}


