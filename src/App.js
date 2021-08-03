import React, { useState } from 'react'
import Navbar from "./Components/Navbar";
import List from "./Components/List";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./Components/Cart";

const listState = [
  {
    id: 1,
    type: 'Peperoni',
    img_url: 'https://images.pexels.com/photos/5088681/pexels-photo-5088681.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    price: 5.00,
    qty: 1,
  },
  {
    id: 2,
    type: 'Supreme',
    img_url: 'https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    price: 6.00,
    qty: 1,
  }
]

function App() {
  const [cartProducts, setCartProducts] = useState([])
  const [cartPage, setCartPage] = useState(false)

  const renderCart = () => {
    setCartPage(cartPage ? false : true)
  }

  const add = (product) => {
    const target = cartProducts.find(item => item.id === product.id)

    if(target){
      const newQty = target.qty + 1

      const newCartProducts = cartProducts.map(item => item.id === product.id ? {...item, qty: newQty} : item);
      setCartProducts(newCartProducts)

    } else {setCartProducts([...cartProducts, product])}
  }

  const removeOne = (product) => {
    if(product.qty > 1){
      const newQty = product.qty - 1
      const newCartProducts = cartProducts.map(item => item.id === product.id ? {...item, qty: newQty} : item);
      setCartProducts(newCartProducts)
    }else { removeProduct(product) }
  }

  const removeProduct = (product) => {
    const newCartProducts = cartProducts.filter(item => item.id !== product.id)
    setCartProducts(newCartProducts)
  }

  return (
    <>
    <Navbar className={'d-flex justify-content-between align-content-center'} renderCart={renderCart} cartPage={cartPage} productsQty={cartProducts.length} />
      <div>
        {cartPage ? <Cart cartProducts={cartProducts} add={add} removeOne={removeOne} removeProduct={removeProduct}/> : <List listState={listState} add={add} />}
      </div>
    </>
  );
}

export default App;
