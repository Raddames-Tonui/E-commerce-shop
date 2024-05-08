import React, { useState, useEffect } from 'react';

function Product() {
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
      <div className="bg-red-900 h-screen m-1 p-10">
        <h1 className="pt-5 ml-10 self-center text-5xl font-semibold dark:text-white">Welcome to our online laptop emporium!</h1>
        <p className="pt-5 ml-10 mr-auto self-center text-center text-2xl font-italic dark:text-gray">At TechNest, we pride ourselves on offering a curated selection of top-notch laptops from leading brands, ensuring you get both quality and performance with every purchase. From sleek ultrabooks to powerful gaming rigs, we've got something for everyone.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-10">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img className="w-full h-64 object-cover object-center" src={product.imageURL} alt={product.productName} />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{product.productName}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xl">Price: ${product.price}</span>
                  <span className="text-gray-600">In Stock: {product.instock}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center pt-10">
          <h3 className="text-2xl font-semibold">Happy Shopping</h3>
          <h1>Peter Mbugua</h1>
        </div>
      </div>
    </div>
  );
}

export default Product;
