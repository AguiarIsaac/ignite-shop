import { X } from "phosphor-react";
import { useContext, useState } from "react";
import { ShoppingCart } from "../../context/ShoppingCartContext";
import { ContentCard, ShoppingCartStyles } from "./styles";

export function Cart() {
  const [cartItems, setCartItems] = useState('')
  const contexCard = useContext(ShoppingCart)
  const list = contexCard.listProducts

  function handleOpenMenu() {
    if(cartItems === '') {
      setCartItems('active')
    } else {
      setCartItems('')
    }
  }
    
  return (
    <ShoppingCartStyles className={cartItems}>
      <button type="button" id="close" onClick={handleOpenMenu} title="close Cart">
        <X size={32} /> 
      </button>

    <ContentCard>
      <div>  
        <h3>Sacola de compras</h3>
        <div className="itensCart">
        </div>
      </div>

      <div className="checkoutCart">
        <div className="purchaseDetails">
          <span>
            <p>Quantidade</p>
            <p></p>
          </span>

          <span>
            <strong>Valor total</strong>
            <strong id="total"></strong>
           </span>
        </div>

        <button type="button" title="Finalizar Compra" disabled={true}>
        Finalizar compra
        </button>

      </div>
      </ContentCard>
    </ShoppingCartStyles>
  )
}