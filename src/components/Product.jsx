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

    fetch('https://e-commerce-shop-3.onrender.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
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
    fetch('https://e-commerce-shop-3.onrender.com/products', {
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
    <div id="Products" className="bg-slate-200 h-screen m-1 p-10 overflow-y-auto">
      <ProductSearch onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden ">
            <img className="w-full h-48 object-cover object-center" src={product.imageURL} alt={product.productName} />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{product.productName}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg">Price: ${product.price}</span>
                <span className="text-gray-600">In Stock: {product.instock}</span>
              </div>
              <button className="mt-2 bg-[#9745CD] hover:bg-[#58139A] text-white font-bold py-2 px-4 rounded" onClick={() => addToCart(product.id)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
        
    </div>
  );
}

export default Product;
