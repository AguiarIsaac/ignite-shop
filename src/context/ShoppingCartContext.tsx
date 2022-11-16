import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react"

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

interface CartProps {
  listProducts: ProductProps[],
  addToCart: (newState: ProductProps) => void,
  removeToCart: (newState: ProductProps) => void,
  changeQuantityItem: (newState: ProductProps) => void,
  valueTotal: number
}

interface ContextProps {
  children: ReactNode
}

export const ShoppingCart = createContext({} as CartProps)

export function ShoppingCartProvider({children}: ContextProps) {

  const [listProducts, setlistProducts] = useState<ProductProps[]>([])
  const [valueTotal, setValueTotal] = useState(0)

  function addToCart(itemSelected: ProductProps) {
    if(listProducts.length === 0) {
      setlistProducts([itemSelected])
    } else {
      const duplicate =  listProducts.find(item => item.id == itemSelected.id)

      if(duplicate) {
        window.alert('Item já adicionado na sacola!')
      } else {
        setlistProducts([...listProducts, itemSelected])
      }

    }
  }

  function removeToCart(itemSelected: ProductProps) {
    const newListProducts = listProducts.filter(item => item.id != itemSelected.id)

    setlistProducts(newListProducts)
  }

  function changeQuantityItem(itemSelected: ProductProps) {
    const newList = listProducts.map(item => {
      if (itemSelected.id == item.id) {
        return {
          ...item,
          quantity: itemSelected.quantity
        }
      }

      return item
    })

    setlistProducts(newList)
  }

  function CalcValueTotal() {
    let calc = 0
    for(let c = 0; c < listProducts.length; c++) {
        calc += listProducts[c].valueTotalItem
    }
    setValueTotal(calc)
  }

  useEffect(() => {
    CalcValueTotal()
    console.log(listProducts)
  },[listProducts])
  
  return (
    <ShoppingCart.Provider value={{listProducts, addToCart, removeToCart, changeQuantityItem, valueTotal}}>
      {children}
    </ShoppingCart.Provider>
  )
}