import React from 'react';
import { Link } from 'react-router-dom';
import products from './Products';

const Home = () => {
    return (
        <div>
            <h2>Home Page</h2>
            <p>Browse products:</p>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home;