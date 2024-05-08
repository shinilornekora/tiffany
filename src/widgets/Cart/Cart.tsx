import React from 'react';

import Header from '../../modules/Header/header';
import ElementToBuy from './ElementToBuy';

import cn from 'classnames';
import { useGlobalStyles } from '../../shared/styles/globalStyles';
import { useStyles } from './styles';

import { TemporaryProducts } from './Samples';

export const Cart = () => {
	const { classes } = useStyles();
	const { classes: globalClasses } = useGlobalStyles();

	return (
		<div>
			<Header />
			<div className={globalClasses.container}>
				<div className={cn(globalClasses.pageMargin, classes.cards)}>
					{TemporaryProducts.map(product => (
						<div key={product.key}>
							<ElementToBuy {...product} />
						</div>
					))}
				</div>
				<div className={classes.cart__totalPrice}>
					<p className={classes.cart__price}>
						<span>Total: </span>
						<span id='totalPrice'>60</span>
						<span>$</span>
					</p>
					<p className={classes.cart__goToPay}>
						<a href={'#'}>Proceed to checkout</a>
					</p>
				</div>
			</div>
		</div>
	);
};
