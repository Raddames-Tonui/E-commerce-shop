import React, { useState, useEffect } from 'react';
import ProductSearch from './ProductSearch';

function Product() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Load cart from browser storage on component mount
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }

    fetch('db.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    // Save cart to browser storage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productId) => {
    const productToAdd = products.find(product => product.id === productId);
    if (productToAdd) {
      const updatedProducts = products.map(product => {
        if (product.id === productId && product.instock > 0) {
          return { ...product, instock: product.instock - 1 };
        }
        return product;
      });
      setCart([...cart, productToAdd]);
      setProducts(updatedProducts);
      updateServer(updatedProducts);
    }
  };


  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    const updatedProduct = products.map(product => {
      if (product.id === productId) {
        return { ...product, instock: product.instock + 1 };
      }
      return product;
    });
    setCart(updatedCart);
    setProducts(updatedProduct);
    updateServer(updatedProduct);
  };

  const updateServer = (updatedProducts) => {
    fetch('http://localhost:3000', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ products: updatedProducts }),
    })
      .then(response => response.json())
      .then(data => console.log('Server response:', data))
      .catch(error => console.error('Error updating server:', error));
  };
  const handleSearch = (searchQuery) => {
    const filtered = products.filter(product =>
      product.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  return (
    <div id="Products" className="bg-red-900 h-screen m-1 p-10 overflow-y-auto">
      <ProductSearch onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-64 object-cover object-center" src={product.imageURL} alt={product.productName} />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{product.productName}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-xl">Price: ${product.price}</span>
                <span className="text-gray-600">In Stock: {product.instock}</span>
              </div>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => addToCart(product.id)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="bg-white border-gray-200 dark:bg-gray-900 md-h-screen m-0.5 p-4 w-1/2 overflow-y-auto max-h-96 flex flex-col">
          <h1 className="text-2xl font-bold mb-4">Cart</h1>
          {cart.map(item => (
            <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
              <img className="w-16 h-16 object-cover rounded" src={item.imageURL} alt={item.productName} />
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{item.productName}</h2>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-gray-600">Price: ${item.price}</p>
                <button className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Product;
