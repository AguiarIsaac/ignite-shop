import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/srtipe";
import { ImageContainer, PackImages } from "../styles/pages/success";
import { SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  costumerName: string;
  products: {
    name: string;
    images: string[];
  }[]
}

export default function Success({ costumerName, products }: SuccessProps) {
  console.log(products)
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada</h1>
        
        <PackImages>  
          {products.map(item => { 
            return ( 
              <ImageContainer key={item.name}>
                <Image src={item.images[0]} width={120} height={110} alt="" />
              </ImageContainer>
            );
          })}
        </PackImages>

        <p>
          Uhuul <strong>{costumerName}</strong>, suas compras de <strong>{products.length}</strong> camisas já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
  
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const costumerName = session.customer_details.name;

  const products = session.line_items.data.map((item) => {
    return item.price.product as Stripe.Product
  })

  return {
    props: {
      costumerName,
      products
    }
  }
}