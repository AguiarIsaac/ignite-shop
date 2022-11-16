import Image from "next/image"
import { useContext, useState } from "react"
import { ShoppingCart } from "../../context/ShoppingCartContext"
import { ImageContainer, ItemCartElement } from "./styles"

interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: string
  quantity: number
  valueTotalItem: number
  description: string
  defaultPriceId: string
}

export function ItemCart(props: ProductProps) {
  const contexCard = useContext(ShoppingCart)

  const [newQuantity, setNewQuantity] = useState(1)
  const [total, setTotal] = useState(Number(props.price))

  function handleAddQuantity() {
    const addedQuantity = newQuantity + 1
    setNewQuantity(addedQuantity)

    const itemFormated = {
      id: props.id,
      name: props.name,
      imageUrl: props.imageUrl,
      price: props.price,
      quantity: newQuantity + 1,
      valueTotalItem: props.valueTotalItem,
      description: props.description,
      defaultPriceId: props.defaultPriceId
    }

    contexCard.changeQuantityItem(itemFormated)
  }

  function handleRemoveQuantity() {
    if(newQuantity > 1) {
        const addedQuantity = newQuantity - 1
        setNewQuantity(addedQuantity)
    }
  }

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
    <ItemCartElement className="item" key={props.id}>
      <ImageContainer>
        <Image src={props.imageUrl} width={120} height={110} alt="" />
      </ImageContainer>

      <div className="details">
        <p>{props.name}</p>
        <strong>{priceFormat(total)}</strong>

        <div className="quantity">

          <div className="controls">
            <button type='button' id="sub" onClick={handleRemoveQuantity}>-</button>
            <p>{newQuantity}</p>
            <button type='button' id="add" onClick={handleAddQuantity}>+</button>
          </div>

          <button type="button" onClick={() => {handleRemoveItem(props)}}>Remover</button>
        </div>

      </div>
    </ItemCartElement>
  )
}