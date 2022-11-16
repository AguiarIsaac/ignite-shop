import { useContext, useState } from "react";
import { ShoppingCart } from "../../context/ShoppingCartContext";
import {ContentCart, CartEmpy} from "./styles";
import axios from "axios";
import { Bag } from "phosphor-react";
import { ItemCart } from "../ItemCart";


export function Cart() {

  const contexCard = useContext(ShoppingCart)
  const list = contexCard.listProducts

  function priceFormat(value: any) {
    const valueFormated = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value / 100)

    return valueFormated
  }



  async function CheckoutCart() {
    try {
      const response = await axios.post('/api/checkout', {
        products: list,
      })

      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;

    } catch (err) {
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <ContentCart>
      <div>  
        <h3>Sacola de compras</h3>

        <div className="itensCart">
          {list.map(item => {
            return (
              <ItemCart
                key={item.id}
                id={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                price={item.price}
                valueTotalItem={item.valueTotalItem}
                quantity={item.quantity}
                description={item.description}
                defaultPriceId={item.defaultPriceId}
              />
            )
          })}
        </div>

        {list.length == 0 && <CartEmpy>
            <h3>Sacola vazia 😅</h3>
            <Bag size={64} />
          </CartEmpy>}
      </div>

      <div className="checkoutCart">
        <div className="purchaseDetails">
          <span>
            <p>Quantidade</p>
            {list.length === 1 && <p>{list.length} item</p>}
            {list.length > 1 && <p>{list.length} itens</p>}
          </span>

          <span>
            <strong>Valor total</strong>
            <strong id="total">{priceFormat(contexCard.valueTotal)}</strong>
          </span>
        </div>

        <button type="button" title="Finalizar Compra" onClick={CheckoutCart}>
          Finalizar compra
        </button>

      </div>
    </ContentCart>
  )
}