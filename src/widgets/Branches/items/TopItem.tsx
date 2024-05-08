import { useStyles } from '../styles';
import useTranslation from '../../../translations/useTranslation';

export const TopItem = () => {
	const { classes } = useStyles();
	const t = useTranslation();

	return (
		<div className={classes.branches__blockForTopItem}>
			<span>{t('Andromeda1')}</span>
		</div>
	);
};