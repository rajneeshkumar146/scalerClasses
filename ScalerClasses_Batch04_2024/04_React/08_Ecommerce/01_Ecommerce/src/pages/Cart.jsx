import React from 'react'
import ProductList from '../components/ProductList'
import { useSelector } from 'react-redux';

function Cart() {
  const cartProductList = useSelector((store) => store.cartReducer.cartProducts);
  return (
    <>
      <h2>Add To cart</h2>
      <div className=''>
        <ProductList productList={cartProductList}></ProductList>
      </div>
    </>
  )
}

export default Cart