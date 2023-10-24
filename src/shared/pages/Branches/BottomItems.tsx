import { useStyles } from './styles';


const BottomItems = () => {
<<<<<<< HEAD
	const {classes} = useStyles();

	return (
		<a href="/product_card/:product_id" className={classes.branches__blockForBottomItem}>
			<span>Product item content</span>
		</a>
	);
};
=======
    const {classes} = useStyles();
    return (
        <a href="/product_card/:product_id" className={classes.branches__blockForBottomItem}>
            <span>Product item content</span>
        </a>
    );
}
>>>>>>> b1766be (Dima 3 (#13))

export default BottomItems;