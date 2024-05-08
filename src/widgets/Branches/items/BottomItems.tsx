import { useStyles } from '../styles';
import React, { useState } from 'react';
import product from '../../static/branches/product.png';

interface BottomItemsProps {
	productId: number;
}

export const BottomItems: React.FC<BottomItemsProps> = ({ productId }) => {
	const { classes } = useStyles();
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<a
			href={`/product_card/${productId}`}
			className={classes.branches__blockForBottomItem}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className={classes.content}>
				<div className={classes.image}>
					<img
						id={`productImage_${productId}`}
						src={product}
						alt='item.png'
						className={isHovered ? classes.darkImg : ''}
					/>
					<div
						id={`productText_${productId}`}
						className={`${classes.branches__contentDescription} ${isHovered ? classes.visibleDescription : ''}`}
					>
						<h4
							className={
								classes.branches__contentDescriptionTitle
							}
						>
							Andromeda: Series FIR
						</h4>
						<p className={classes.branches__contentDescriptionText}>
							Andromeda: FIR gives you stability of a fine-tuned
							FIR filter, which you can customise. Largest benefit
							of AS: FIR is very low CPU usage in Linear Phase
							Mode. AS: FIR gives you a nice workflow to edit your
							sounds quickly.
						</p>
					</div>
				</div>
				<span>Product item content</span>
			</div>
		</a>
	);
};
