import Image from "next/image";
import { useContext } from "react";
import { ShoppingCart } from "../../context/ShoppingCartContext";
import {ContentCart, ImageContainer, CartEmpy} from "./styles";
import axios from "axios";
import { Bag } from "phosphor-react";

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
              <div className="item" key={item.id}>
                <ImageContainer>
                  <Image src={item.imageUrl} width={120} height={110} alt="" />
                </ImageContainer>

                <div className="details">
                <p>{item.name}</p>
                <strong>{priceFormat(item.price)}</strong>

                <div className="quantity">

                  <div className="controls">
                    <button type='button' id="sub">-</button>
                      <p>1</p>
                    <button type='button' id="add">+</button>
                  </div>

                  <button type="button" onClick={() => {handleRemoveItem(item)}}>Remover</button>
                </div>
                
              </div>
            </div>
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