import { ReactNode, useEffect, useState } from "react";
import { createContext } from "react" // Tem que ser assim no Next, pq assim evita renderizações

interface ProductProps {
  id: string
  name: string
  imageUrl: string
  price: string
  description: string
  defaultPriceId: string
}

interface CartProps {
  listProducts: ProductProps[],
  addToCart: (newState: ProductProps) => void,
}

interface ContextProps {
  children: ReactNode
}

export const ShoppingCart = createContext({} as CartProps)

export function ShoppingCartProvider({children}: ContextProps) {

  const [listProducts, setlistProducts] = useState<ProductProps[]>([])

  function addToCart(item: ProductProps) {
    if(listProducts.length === 0) {
      setlistProducts([item])
    } else {
      setlistProducts([...listProducts, item])
    }
  }

  useEffect(() => {
    console.log(listProducts)
  },[listProducts])
  
  return (
    <ShoppingCart.Provider value={{listProducts, addToCart}}>
      {children}
    </ShoppingCart.Provider>
  )
}