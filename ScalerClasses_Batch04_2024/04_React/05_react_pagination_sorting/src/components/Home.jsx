import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import basicOps from "./utility/basicOps"
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Categories from './Categories';

const ASCENDING_ORDER_SORTING = 1;
const DESCENDING_ORDER_SORTING = -1;

function Home() {


  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState(0);
  const [currCategories, setCurrCategories] = useState("All Categories");


  /********************Getting all the Products *****************/
  useEffect(() => {
    (async function () {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const productData = await response.json();

      setProducts(productData);
    })();
  }, []);

  /********************Getting all the categories *****************/
  useEffect(() => {
    (async function () {
      const response = await fetch(`https://fakestoreapi.com/products/categories`);
      const categorieData = await response.json();

      setCategories(categorieData);
    })();
  }, []);

  let modifiedArrayOfProducts = basicOps(products, searchTerm, sortDirection, currCategories);


  return (
    <>

      <header className='nav_wrapper'>
        <div className='search_sortWrapper'>

          <input className='search_input' type="text" value={searchTerm} onChange={(event) => {
            setSearchTerm(event.target.value);
          }}></input>

          <div className='icon_container'>
            <ArrowCircleUpIcon style={{ color: "white" }} fontSize="large" onClick={() => {
              setSortDirection(ASCENDING_ORDER_SORTING);
            }} />

            <ArrowCircleDownIcon style={{ color: "white" }} fontSize="large" onClick={() => {
              setSortDirection(DESCENDING_ORDER_SORTING);
            }} />
          </div>
        </div>

        <div className='categories_wrapper'>
          <Categories 
             categories = {categories}
             setCurrCategories = {setCurrCategories}
          >
          </Categories>
        </div>

      </header>

      <main className='product_wrapper'>
        {
          modifiedArrayOfProducts === null ? <h3>....Loading</h3> :
            <>
              {
                modifiedArrayOfProducts.map((product) => {
                  return (
                    <div className='product'>
                      <img src={product.image} alt="" className='product_image'></img>
                      <div className='product_meta'>
                        <p className='product_title'>Title: {product.title}</p>
                        <p className='price'>Price: {product.price}</p>
                      </div>
                    </div>
                  );
                })
              }
            </>
        }
      </main>
    </>
  )
}

export default Home