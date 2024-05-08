import React from 'react';

import { Header } from '../../features/Header/header';

import { useGlobalStyles } from '../../shared/styles/globalStyles';
import { useStyles } from './styles';
import { useTranslation } from '../../shared/hooks/useTranslation';

import cardImg from '../../shared/static/card/cardImg.png';

export const Card = () => {
	const t = useTranslation();

	const { classes, cx } = useStyles();
	const { classes: globalClasses } = useGlobalStyles();

	// TODO: сделать проброску названия с бека, описание генерируется по нему.
	const name = 'Andromeda: Series FIR';

	return (
		<div>
			<Header />
			<div
				className={cx(
					globalClasses.container,
					globalClasses.pageMargin,
				)}
			>
				<div className={classes.card__flexWrapper}>
					<div className={classes.card__img}>
						<img src={cardImg} alt='img' />
					</div>
					<div className={classes.card__content}>
						<div className={classes.card__description}>
							<h1 className={classes.card__descriptionTitle}>
								{name}
							</h1>
							<p className={classes.card__descriptionText}>
								{t(name)}
							</p>
						</div>
						<div className={classes.card__priceItem}>
							<span className={classes.card__priceItemElement}>
								45<span>$</span>
							</span>
							<a
								href={'#'}
								className={classes.card__priceItemElement}
							>
								{t('Add to cart')}
							</a>
							<a
								href={'#'}
								className={classes.card__priceItemElement}
							>
								{t('View branch')}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
