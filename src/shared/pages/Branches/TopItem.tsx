import { useStyles } from './styles';
<<<<<<< HEAD
import useTranslation from '../../utils/useTranslation';


const TopItem = () => {
	const { classes } = useStyles();
	const t = useTranslation();

	return (
		<div className={ classes.branches__blockForTopItem }>
			<span>{ t('Andromeda1') }</span>
		</div>
	);
};
=======


const TopItem = () => {
    const {classes} = useStyles();
    return (
        <div className={classes.branches__blockForTopItem}>
            <span>Andromeda1</span>
        </div>
    );
}
>>>>>>> b1766be (Dima 3 (#13))

export default TopItem;