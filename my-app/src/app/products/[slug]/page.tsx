import { stripe } from "@/lib/stripe"
import Stripe from "stripe"
import { InfoProduct } from "../components/InfoProduct"

interface PageProductProps{
    params:{
        slug:string
    }
}

interface ProductProps{
    props:{
        id: string; 
        name: string;
        imageUrl: string;
        price: number | null;
        description: string | null,
        defaultPriceId: string
    }
}
export default async function Products({params} : PageProductProps){

    const productId = params.slug

    const response = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })

    const price = response.default_price as Stripe.Price;

    const product : ProductProps = {
        props:{
            id: response.id,
            name: response.name,
            imageUrl: response.images[0],
            price: price.unit_amount,
            description: response.description,
            defaultPriceId: price.id
        },
    }
    
    return(
      <InfoProduct product={product.props}/>
    )
}