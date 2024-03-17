import useTranslation from '../../../translations/useTranslation';

const Card = () => {
	const t = useTranslation();

	return (
		<div>
			{ t('Product card will be here') }
		</div>
	);
};

export default Card;
