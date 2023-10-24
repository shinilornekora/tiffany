import useTranslation from '../../utils/useTranslation';

const Card = () => {
	const t = useTranslation();

	return (
		<div>
			{ t('Product card will be here') }
		</div>
	);
};

export default Card;
