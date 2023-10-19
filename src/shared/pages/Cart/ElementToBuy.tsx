import React from 'react';
import { Product } from '../../../types';
import { useStyles } from './styles';
const ElementToBuy = ({ name, price, picture }: Product) => {

	const { classes } = useStyles();

	return (
		<div className={classes.cardWrapper}>
			<img src={picture} alt="productImage"/>
			<div className={classes.cardDescription}>
				<div className={classes.nameBlock}>
					{ name }
				</div>
				<div className={classes.priceAndActionBlock}>
					<div className={classes.priceBlock}>
						{`${price}$`}
					</div>
					<div className={classes.actionBlock}>
						<a href="#">
                            Open product card
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ElementToBuy;
