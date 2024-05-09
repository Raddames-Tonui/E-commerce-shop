import React, { useEffect, useState } from 'react';
import AdminProductCard from './AdminProductCard';

function AdminProductList() {
    const [productsByCategory, setProductsByCategory] = useState({});

    useEffect(() => {
        fetch('https://e-commerce-shop-3.onrender.com/products') 
            .then((response) => response.json())
            .then((data) => {
                // Group products by category
                const groupedProducts = {};
                data.forEach((product) => {
                    // This if condition checks if the category of the current product (product.category) 
                    // is already a key in the groupedProducts object. If the category doesn't exist as a key yet, 
                    // it creates a new array with the current product and assigns it to that category in groupedProducts.
                    if (!groupedProducts[product.category]) {
                        groupedProducts[product.category] = [product];
                    } else {
                        groupedProducts[product.category].push(product);
                    }
                });
                setProductsByCategory(groupedProducts);
            })
            .catch((error) => console.error('Error fetching products:', error));
    }, []); 

    console.log(productsByCategory);

    
    return (
        <div>
            {
                // returns an array containing the keys of the productsByCategory object, which are the categories.
                Object.keys(productsByCategory).map((category) => (
                    <div key={category} >
                        <h2 className='font-bold text-xl underline underline-offset-2 p-3 flex justify-center '>{category}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto">
                            {productsByCategory[category].map(({ id, productName, brand, price, imageURL, description, instock }) => (
                                <AdminProductCard
                                    key={id}
                                    id={id}
                                    productName={productName}
                                    brand={brand}
                                    price={price}
                                    imageURL={imageURL}
                                    description={description}
                                    instock={instock}
                                />
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default AdminProductList;
