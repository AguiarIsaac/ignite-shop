import Image from "next/image"
import { HeaderComponent, ShoppingCartStyles } from "./styles"
import logoSvg from "../../assets/logo.svg"
import { Cart } from "../Cart"
import { Handbag, X } from "phosphor-react"
import { ShoppingCart } from "../../context/ShoppingCartContext"
import { useContext, useEffect, useState } from "react"

export function Header() {
  const contexCard = useContext(ShoppingCart)
  const [itemsAdded, setItemsAdded] = useState(0)
  const [cartItems, setCartItems] = useState('')

  function handleOpenMenu() {
    if(cartItems === '') {
      setCartItems('active')
    } else {
      setCartItems('')
    }
  }
  
  useEffect(() => {
    setItemsAdded(contexCard.listProducts.length)
  }, [contexCard.listProducts])

  return (
    <HeaderComponent>
      <Image src={logoSvg} alt="" />

      <button type="button" title="OpenCart" onClick={handleOpenMenu} >
        <Handbag size={32} />
        {contexCard.listProducts.length > 0 && <span id="counter">{itemsAdded}</span>}
      </button>

      <ShoppingCartStyles className={cartItems}>
        <button type="button" id="close" onClick={handleOpenMenu} title="close Cart">
          <X size={32} /> 
        </button>

        <Cart />
    </ShoppingCartStyles>


    </HeaderComponent>
  )
}