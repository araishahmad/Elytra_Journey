import { products } from './Data';
import { useState} from 'react';

export default function MyApp() {
	const [amount, setAmount] = useState(0);
	const filteredProducts = products.filter (item => item.price > amount);


	const listItems = filteredProducts.map(item => (
		<div key={item.id}>
			<h1 style={{ fontSize: '20px' }}> {item.name} </h1>
			<ul>
				<li>Price: {item.price}</li>
				<li>Category: {item.category}</li>
				<li>Store Name: {item.storeName}</li>
			</ul>
		</div>
	));

	return (
		<div>
			<FilterButton amount={amount} setAmount={setAmount} />
			{filteredProducts.length === 0 ? <p>No records found</p> : listItems}
		</div>
	);
}

function FilterButton (props){
	return (
		<button onClick={ () => props.setAmount (props.amount + 10)}>Filter out products &gt {props.amount}</button>
	)
}

// Both methods can be used for it
// function FilterButton ({amount, setAmount}){
// 	return (
// 		<button onClick={ () => setAmount (amount + 10)}>Filter out products &gt {amount}</button>
// 	)
// }