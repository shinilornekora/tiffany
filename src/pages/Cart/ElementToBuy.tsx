import React from 'react';

import { Product } from '@types';
import { useTranslation } from '@shared/hooks/useTranslation';
import { useStyles } from './styles';

export const ElementToBuy = ({ name, price, picture }: Product) => {
	const { classes } = useStyles();
	const t = useTranslation();

	return (
		<div className={classes.cardWrapper}>
			<img src={picture} alt='productImage' />
			<div className={classes.cardDescription}>
				<div className={classes.nameBlock}>{name}</div>
				<div className={classes.priceAndActionBlock}>
					<div className={classes.priceBlock}>{`${price}$`}</div>
					<div className={classes.actionBlock}>
						<a href='#'>{t('Open product card')}</a>
					</div>
				</div>
			</div>
		</div>
	);
};
