import { HomeContainer, Product } from "../styles/pages/home"
import Image from "next/image"
import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from "next"
import 'keen-slider/keen-slider.min.css'
import { stripe } from "../lib/srtipe"
import Stripe from "stripe"
import Link from "next/link"
import Head from "next/head"
import { Handbag } from "phosphor-react"

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  });

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
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
          {products.map(product => {
            return (
              <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
                <Product className="keen-slider__slide">
                  <Image src={product.imageUrl} width={520} height={480} alt="" />

                  <footer>
                    <div>
                      <p>{product.name}</p>
                      <span>{priceFormat(product.price)}</span>
                    </div>

                    <button type="button" title="Adicionar a sacola">
                      <Handbag size={32} />
                    </button>
                  </footer>
                </Product>
              </Link>
            )
          })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  });


  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours,
  }

}