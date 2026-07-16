import React from 'react';
import {useParams, NavLink} from 'react-router-dom';
import Products from './Products';

const ProductDetails = () => {
    const { id } = useParams ();
    const product = Products.find ((p) => p.id === id);

    if (!product) {
        return (
            <div>
                <h2>No product found</h2>
                <NavLink to="/">Back to Home</NavLink>
            </div>
        )
    }

    return (
        <div>
            <h2>Product Name: {product.name}</h2>
            <ul>
                <li>Product id: {product.id}</li>
                <li>Product Price: ${product.price}</li>
            </ul>

            <NavLink to="/">Back to home</NavLink>
        </div>
    )
}

export default ProductDetails;