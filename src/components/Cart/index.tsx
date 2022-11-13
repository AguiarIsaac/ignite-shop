import Image from "next/image";
import { useContext, useState } from "react";
import { ShoppingCart } from "../../context/ShoppingCartContext";
import {ContentCart, ImageContainer} from "./styles";

interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
  defaultPriceId: string
}

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

  function handleRemoveItem(item: ProductProps) {
    contexCard.removeToCart(item)
  }

  return (
    <ContentCart>
      <div>  
        <h3>Sacola de compras</h3>

        <div className="itensCart">
          {list.map(item => {
            return (
              <div className="item" key={item.id}>
                <ImageContainer>
                  <Image src={item.imageUrl} width={120} height={110} alt="" />
                </ImageContainer>

                <div className="details">
                <p>{item.name}</p>
                <strong>{priceFormat(item.price)}</strong>
                <button type="button" onClick={() => {handleRemoveItem(item)}}>Remover</button>
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
            <strong id="total">{priceFormat(contexCard.valueTotal)}</strong>
          </span>
        </div>

        <button type="button" title="Finalizar Compra">
          Finalizar compra
        </button>

      </div>
    </ContentCart>
  )
}