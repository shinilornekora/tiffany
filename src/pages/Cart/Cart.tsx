import React from 'react';

import { Header } from '@features/Header/header';
import { useGlobalStyles } from '@shared/styles/globalStyles';

import { ElementToBuy } from './ElementToBuy';
import { TemporaryProducts } from './Samples';
import { useStyles } from './styles';

import cn from 'classnames';

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
