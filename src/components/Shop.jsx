import { useContext, useState } from "react"
import { CartContext, productContext } from "./Root"
import Product from "./Product";
import { toast } from 'react-toastify'
import { addToDb } from "../utils/fakeDB";


const Shop = () => {
  const [cart, setCart]=useContext(CartContext)
  const products = useContext(productContext);
  //console.log(products)

  const handleAddToCart = product => {
    let newCart = []
    const exists = cart.find(
      existingProduct => existingProduct.id === product.id
    )
    if (!exists) {
      product.quantity = 1
      newCart = [...cart, product]
    } else {
      const rest = cart.filter(
        existingProduct => existingProduct.id !== product.id
      )
      exists.quantity = exists.quantity + 1
      newCart = [...rest, exists]
    }

    setCart(newCart) // local storage a set korar pora abr button a click korla oi cart o local storage a set kora and update kora {initial cart}
    console.log(cart)
    addToDb(product.id)
    toast.info('Info: Product Added!', { autoClose: 500 })
  }

  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
        
        {
          products.map(product =>(
            <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>
          ) )
        }
      </div>
    </div>
  )
}

export default Shop