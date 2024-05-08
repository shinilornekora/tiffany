import React from 'react';

import { Header } from '../../features/Header/header';

import { useGlobalStyles } from '../../shared/styles/globalStyles';
import { useStyles } from './styles';
import { useTranslation } from '../../shared/hooks/useTranslation';

import cardImg from '../../shared/static/card/cardImg.png';

export const Card = () => {
	const { classes, cx } = useStyles();
	const { classes: globalClasses } = useGlobalStyles();
	const t = useTranslation();

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
								{t('Andromeda: Series FIR')}
							</h1>
							<p className={classes.card__descriptionText}>
								{t(
									'Andromeda: FIR gives you stability of a fine-tuned FIR filter,' +
										' which you can customise. \n' +
										'Largest benefit of AS: FIR is very low CPU usage in Linear Phase Mode. \n' +
										'AS: FIR gives you a nice workflow to edit your sounds quickly.',
								)}
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
								Add to cart
							</a>
							<a
								href={'#'}
								className={classes.card__priceItemElement}
							>
								View branch
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
