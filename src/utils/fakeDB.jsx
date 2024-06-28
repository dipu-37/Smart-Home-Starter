// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = {}
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart)
    }
  
    // add quantity
    const quantity = shoppingCart[id]
    if (quantity) {
      const newQuantity = quantity + 1
      shoppingCart[id] = newQuantity
    } else {
      shoppingCart[id] = 1
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
  }
//   key-->  shopping-cart
//value--->   id: quantaty
// 623853b2e91c8de578c9245e: 1
// 623853b21fb149d2ee7b76c7: 2
// 623853b2239582e48409ccc6: 1

  const getStoredCart = () => {
    let shoppingCart = {}
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart
  }
  
  const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
      const shoppingCart = JSON.parse(storedCart)
      if (id in shoppingCart) {
        delete shoppingCart[id]
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
      }
    }
  }
  
  const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
  }
  
  export { addToDb, getStoredCart, removeFromDb, deleteShoppingCart }
  