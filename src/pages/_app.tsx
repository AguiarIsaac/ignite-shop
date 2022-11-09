import { globalStyles } from "../styles/global"
import logoImg from "../assets/logo.svg"
import { Container, ContentCard, Header, ImageContainer, ShoppingCart } from "../styles/pages/app"
import Image from 'next/image'
import Link from "next/link"
import { Handbag, X } from "phosphor-react"
import { useState } from "react"
import { ShoppingCartProvider } from '../context/ShoppingCartContext' 

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
    <ShoppingCartProvider>
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
          <Link href="#">
            <button type="button" onClick={handleOpenMenu} title="Open Cart"><Handbag size={32} /></button>
          </Link>
        </Header>

        <ShoppingCart className={cartItems}>
          <button type="button" id="close" onClick={handleOpenMenu} title="close Cart">
            <X size={32} /> 
          </button>

          <ContentCard>
            <div>  
              <h3>Sacola de compras</h3>

              <div className="itensCart">
                <div className="item">
                  <ImageContainer>

                  </ImageContainer>

                  <div className="details">
                    <p>Camiseta Beyond The Limits</p>
                    <strong>R$ 79,90</strong>
                    <button type="button">Remover</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="checkoutCart">
              <div className="purchaseDetails">
                <span>
                  <p>Quantidade</p>
                  <p>1 item</p>
                </span>

                <span>
                  <strong>Valor total</strong>
                  <strong id="total">R$ 79,90</strong>
                </span>
              </div>

              <button type="button" title="Finalizar Compra">
                Finalizar compra
              </button>
              
            </div>
          </ContentCard>
        </ShoppingCart>

        <Component {...pageProps} />
      </Container>
    </ShoppingCartProvider>
  )
}


