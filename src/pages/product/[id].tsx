import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { GetStaticProps, GetStaticPaths } from "next"
import Image from "next/future/image";
import Stripe from "stripe";
import { stripe } from "../../lib/srtipe";
import { useState } from "react";
import Head from "next/head";
import { useContext } from "react";
import { ShoppingCart } from "../../context/ShoppingCartContext";

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    quantity: number
    valueTotalItem: number
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
  
  const ContextCard = useContext(ShoppingCart)


  function handleAddToCart() {
    ContextCard.addToCart(product)
  }

  function priceFormat(value: any) {
    const valueFormated = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value / 100)

    return valueFormated
  }


  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{priceFormat(product.price)}</span>

          <p>{product.description}</p>

          <button disabled={isCreatingCheckoutSession} onClick={handleAddToCart}>
          Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking', // pra tela de loanding funcionar, tem que esta como true
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        quantity: 1,
        valueTotalItem: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1 // 1 hours
  }
}