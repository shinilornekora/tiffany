import Header from '../../components/header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useGlobalStyles } from '../../styles/globalStyles';

import SliderTop from './SliderTop';
import SliderBottom from './SliderBottom';

export const Branches = () => {
	const TopItemQuantity = 15;
	const BottomItemQuantity = 15;
	const { classes: globalClasses } = useGlobalStyles();

	return (
		<>
			<Header />
			<div className={globalClasses.container}>
				<SliderTop itemsQuantity={TopItemQuantity} />
				<SliderBottom itemsQuantity={BottomItemQuantity} />
			</div>
		</>
	);
};
