import React, { useState, useEffect } from 'react';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('db.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.productName}</h2>
            <p>{product.description}</p>
            <img src={product.imageURL} alt={product.productName} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
