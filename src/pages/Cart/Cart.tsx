import React from 'react';

import { Header } from '@features/Header/header';
import { useGlobalStyles } from '@shared/styles/globalStyles';
import { useTranslation } from '@shared/hooks/useTranslation';

import { ElementToBuy } from './ElementToBuy';
import { TemporaryProducts } from './Samples';
import { useStyles } from './styles';

import cn from 'classnames';
import { makeKey } from '@shared/utils/makeKey';

export const Cart = () => {
	const t = useTranslation();

	const { classes } = useStyles();
	const { classes: globalClasses } = useGlobalStyles();

	return (
		<div>
			<Header />
			<div className={globalClasses.container}>
				<div className={cn(globalClasses.pageMargin, classes.cards)}>
					{TemporaryProducts.map(product => (
						<div key={makeKey(product)}>
							<ElementToBuy {...product} />
						</div>
					))}
				</div>
				<div className={classes.cart__totalPrice}>
					<p className={classes.cart__price}>
						<span>{t('Total') + ':'} </span>
						<span id='totalPrice'>60</span>
						<span>$</span>
					</p>
					<p className={classes.cart__goToPay}>
						<a href={'#'}>{t('Proceed to checkout')}</a>
					</p>
				</div>
			</div>
		</div>
	);
};
