import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { GetStaticProps, GetStaticPaths } from "next"
import Image from "next/future/image";
import Stripe from "stripe";
import { stripe } from "../../lib/srtipe";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import Head from "next/head";
import { useContext } from "use-context-selector";
import { ShoppingCart } from "../../context/ShoppingCartContext";

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
  
  const ContextCard = useContext(ShoppingCart)


  async function handleBuyButton() {
    ContextCard.addToCart(product)
    // try {
    //   setIsCreatingCheckoutSession(true);

    //   const response = await axios.post('/api/checkout', {
    //     priceId: product.defaultPriceId,
    //   })

    //   const { checkoutUrl } = response.data;

    //   window.location.href = checkoutUrl;
    // } catch (err) {
    //   setIsCreatingCheckoutSession(false);

    //   alert('Falha ao redirecionar ao checkout!')
    // }
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
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button disabled={isCreatingCheckoutSession} onClick={handleBuyButton}>
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
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1 // 1 hours
  }
}