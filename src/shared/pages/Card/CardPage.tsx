import useTranslation from '../../utils/useTranslation';
import { useStyles } from './styles';
import Header from '../../components/header';
import React from 'react';


const Card = () => {
	const t = useTranslation();
	const { classes } = useStyles();
	const description:string = 'Andromeda: FIR gives you stability of a fine-tuned FIR filter, which you can customise. ' +
		'Largest benefit of AS: FIR is very low CPU usage in Linear Phase Mode. ' +
		'AS: FIR gives you a nice workflow to edit your sounds quickly.';

	return (
		<div>
			<Header/>
			<div className={classes.cartWrapper}>
				<div className={classes.cartMainFlex}>
					<div className={classes.cartImage}></div>
					<div className={classes.cartContent}>
						<div className={classes.cartInfo}>
							<h1 className={classes.cartTitle}>Andromeda: Series FIR</h1>
							<p className={classes.cartDescription}>{ description }</p>
						</div>
						<div className={classes.cartPrice}>
							<div className={classes.cartPriceValue}>
								<span>45$</span>
							</div>
							<button className={classes.cartAddBtn}>
								<span>{ t('Add to cart') }</span>
							</button>
							<button className={classes.cartViewBranchBtn}>
								<span>{ t('View branch') }</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
