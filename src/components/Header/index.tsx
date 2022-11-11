import Image from "next/image"
import { HeaderComponent } from "./styles"
import logoSvg from "../../assets/logo.svg"
import { Cart } from "../Cart"
import { Handbag } from "phosphor-react"
import { ShoppingCart } from "../../context/ShoppingCartContext"
import { useContext, useEffect, useState } from "react"

export function Header() {
  const contexCard = useContext(ShoppingCart)
  const [itemsAdded, setItemsAdded] = useState(0)
  
  useEffect(() => {
    setItemsAdded(contexCard.listProducts.length)
  }, [contexCard.listProducts])

  return (
    <HeaderComponent>
      <Image src={logoSvg} alt="" />

      <button type="button" title="OpenCart" >
        <Handbag size={32} />

        {contexCard.listProducts.length > 0 && <span>{itemsAdded}</span>}
      </button>

      <Cart />
    </HeaderComponent>
  )
}