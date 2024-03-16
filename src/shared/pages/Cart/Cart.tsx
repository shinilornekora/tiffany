import React from 'react';

import Header from '../../components/header';
import ElementToBuy from './ElementToBuy';

import cn from 'classnames';
import { useGlobalStyles } from '../../styles/globalStyles';
import { useStyles } from './styles';


import { TemporaryProducts } from './Samples';
// import apis from '../../../apis';

const Cart = () => {
	// const productList = apis.product.list()
	const { classes } = useStyles();
	const { classes: globalClasses } = useGlobalStyles();

	return (
		<div>
			<Header/>
			{
				<div className={
					cn(globalClasses.container, globalClasses.pageMargin, classes.cards)
				}>
					{ TemporaryProducts.map((product) => (
						<div key={ product.key }>
							<ElementToBuy { ...product } />
						</div>
					)) }
				</div>
			}
		</div>
	);
};

export default Cart;
