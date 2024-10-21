import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Home() {

  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState(null);


  useEffect(() => {
    (async function () {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const productData = await response.json();

      setProducts(productData);
    })();
  }, []);

  let filteredArr = products;
  if (searchTerm != "") {
    filteredArr = products.filter(product => {
      let lowerSearchTerm = searchTerm.toLowerCase();
      let lowerCaseTitle = product.title.toLowerCase();

      return lowerCaseTitle.includes(lowerSearchTerm);
    });
  }


  return (
    <>

      <header className='nav_wrapper'>
        <input className='search_input' type="text" value={searchTerm} onChange={(event) => {
          setSearchTerm(event.target.value);
        }}></input>
      </header>

      <main className='product_wrapper'>
        {
          filteredArr === null ? <h3>....Loading</h3> :
            <>
              {
                filteredArr.map((product) => {
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