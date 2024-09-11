'use client'
import { urlFor } from "@/lib/sanity";
import { Button } from "./button";
import { useShoppingCart } from "use-shopping-cart";

export interface ProductCart{
    name: string;
    description:string;
    price:number;
    currency:string;
    image:any;
}

export default function AddToBag({currency,description,image,name,price}:ProductCart){
    const {addItem , handleCartClick} = useShoppingCart()
    //product data onclick product add to cart
    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        id: "4398754092"
     }
    return(
        <Button onClick={()=>{addItem(product),handleCartClick()}}>Add to Cart</Button>
    )
}