import { useStyles } from './styles';

const BottomItems = () => {
	const { classes } = useStyles();

	return (
		<a
			href='/product_card/:product_id'
			className={classes.branches__blockForBottomItem}
		>
			<div className={classes.content}>
				<img className={classes.image} src='' alt='item.png' />
				<span>Product item content</span>
			</div>
		</a>
	);
};

export default BottomItems;
