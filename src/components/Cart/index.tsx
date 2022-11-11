import { useContext, useState } from "react";
import { ShoppingCart } from "../../context/ShoppingCartContext";
import {ContentCart, ImageContainer} from "./styles";

export function Cart() {
  const contexCard = useContext(ShoppingCart)
  const list = contexCard.listProducts
  
  return (
    <ContentCart>
      <div>  
        <h3>Sacola de compras</h3>

        <div className="itensCart">
          {list.map(item => {
            return (
              <div className="item" key={item.id}>
                <ImageContainer>

                </ImageContainer>

                <div className="details">
                <p>{item.name}</p>
                <strong>{item.price}</strong>
                <button type="button">Remover</button>
              </div>
            </div>
            )
          })}
        </div>
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
            <strong id="total">R$ 79,90</strong>
          </span>
        </div>

        <button type="button" title="Finalizar Compra">
          Finalizar compra
        </button>

      </div>
    </ContentCart>
  )
}