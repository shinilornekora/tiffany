import { useStyles } from './styles';


const BottomItems = () => {
	const {classes} = useStyles();
	return (
		<a href="/product_card/:product_id" className={classes.branches__blockForBottomItem}>
			<span>Product item content</span>
		</a>
	);
};

export default BottomItems;