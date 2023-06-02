interface ProductProps{
    params:{
        slug:string
    }
}

export default function Products({params} : ProductProps){
    return(
        <h1>Product: {params.slug}</h1>
    )
}