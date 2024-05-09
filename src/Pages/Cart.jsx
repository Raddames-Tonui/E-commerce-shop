import React, { useEffect, useState } from 'react';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch cart data from local storage on component mount
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (itemId) => {
    // Remove item from cart
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
    // Update local storage with updated cart
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className='flex  mx-auto h-screen bg-slate-200'>
      {cart && cart.length > 0 && (
        <div className="bg-white border-gray-200 dark:bg-gray-900 md-h-screen m-0.5 p-4 w-1/2 overflow-y-auto max-h-96 flex flex-col">
          <h1 className="text-2xl font-bold mb-4">Cart</h1>
          {cart.map(item => (
            <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
              <img className="w-12 h-12 object-cover rounded" src={item.imageURL} alt={item.productName} />
              <div className="ml-4">
                <h2 className="text-md font-semibold">{item.productName}</h2>
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
