import React, { useEffect, useState } from 'react';
import AdminProductCard from './AdminProductCard';

function AdminProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    }, []); 

    console.log(products);

    return (
        <div>
            <h1></h1>
            {
                products && products.map(({ id, productName, brand, price, imageURL, description, instock }) => (
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
                ))
            }
        </div>
    );
}

export default AdminProductList;
