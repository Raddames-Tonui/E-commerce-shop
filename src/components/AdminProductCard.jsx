import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';


function AdminProductCard({ productName, brand, price, imageURL, description, id, instock }) {
    const formattedPrice = new Intl.NumberFormat('en-KE', {
        style: 'currency',
        currency: 'KES'
    }).format(price); // Format price in Kenya Shillings (KES)


    function handleDelete(id) {
        fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE",
        })
        .then(() => {
            //window.alert('Product deleted successfully');
            window.location.reload();
        })
        
    }


    return (
        <div className="w-72 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="h-36 relative">
                <a href="#">
                    <img className="absolute top-0 left-0 w-full h-full object-cover" src={imageURL} alt="product image" />
                </a>
            </div>
            <div className="p-4">
                <a href="#" className="block text-base font-semibold tracking-tight text-gray-900 dark:text-white mb-1">
                    {productName}
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{brand}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 truncate">{description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-base font-semibold text-gray-900 dark:text-white">{formattedPrice}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${instock ? 'bg-green-500 text-green-100' : 'bg-red-500 text-red-100'} dark:bg-gray-600 dark:text-gray-100`}>
                        {instock ? 'In Stock' : 'Out of Stock'}
                    </span>
                </div>
                <div className="flex justify-between">
                <Link to={`/admin/update/:${id}`} className="button">Update</Link> 
                   
                    <button className="button-1" onClick={() => handleDelete(id)}>Delete</button>
                </div>
                
        
            </div>
            
                </div>
            )}
 
export default AdminProductCard;
