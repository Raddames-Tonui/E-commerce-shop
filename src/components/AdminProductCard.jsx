import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function AdminProductCard({ productName, brand, price, imageURL, description, id, instock }) {
    const formattedPrice = new Intl.NumberFormat('en-KE', {
        style: 'currency',
        currency: 'KES'
    }).format(price); // Format price in Kenya Shillings (KES)

    function handleDelete(id) {

      fetch(`https://e-commerce-shop-3.onrender.com/products/${id}`, {
          method: "DELETE",
      })
      .then(() => {
          toast.success('Product deleted successfully');
          window.location.reload();
      })
      
  }

  function handleDelete(id) {
    fetch(`https://e-commerce-shop-3.onrender.com/products/${id}`, {
        method: "DELETE",
    })
    .then(() => {
      toast.success('Product deleted successfully')
        window.location.reload();
    })
    
}



    return (
        <div className="w-72 bg-white border border-gray-400 rounded-lg shadow-lg overflow-hidden ">
            <div className="h-36 relative">
                <img className="absolute top-0 left-0 w-full h-full object-cover" src={imageURL} alt="product image" />
            </div>
            <div className="p-4">
                <div className="block text-base font-semibold tracking-tight text-gray-900 dark:text-white mb-1">
                    {productName}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{brand}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 truncate">{description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-base font-semibold text-gray-900 dark:text-white">{formattedPrice}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${instock ? 'bg-green-500 text-green-100' : 'bg-red-500 text-red-100'} dark:bg-gray-600 dark:text-gray-100`}>
                        {instock ? 'In Stock' : 'Out of Stock'}
                    </span>
                </div>
                <div className="flex justify-end mt-3">
                    <Link to={`/admin/update/${id}`} className="text-white bg-[#9645CC] hover:bg-[#58139A] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</Link> 
                    <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center ml-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={() => handleDelete(id)}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default AdminProductCard;
