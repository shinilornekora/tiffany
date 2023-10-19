import React from 'react';
import Header from '../../components/header';
import { Product } from '../../../types';
import ElementToBuy from './ElementToBuy';
// import apis from '../../../apis';

const Cart = () => {
	// const productList = apis.product.list()
	const temporaryProducts: Product[] = [
		{
			name: 'Andromeda',
			releaseDate: new Date('03-03-2022'),
			version: '1.0.0',
			price: 100,
			pack: 'first',
			picture: '#',
			key: '1',
		},
		{
			name: 'Andromeda1',
			releaseDate: new Date('03-03-2022'),
			version: '1.0.0',
			price: 100,
			pack: 'first',
			picture: '#',
			key: '1',
		},
		{
			name: 'Andromeda2',
			releaseDate: new Date('03-03-2022'),
			version: '1.0.0',
			price: 100,
			pack: 'first',
			picture: '#',
			key: '1',
		}
	];
	return (
		<div>
			<Header/>
			{
				temporaryProducts.map((product) => <ElementToBuy { ...product } />)
			}
		</div>
	);
};

export default Cart;
