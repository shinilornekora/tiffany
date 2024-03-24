import Header from '../../components/header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SliderTop from './SliderTop';
import SliderBottom from './SliderBottom';

export const Branches = () => {
	const TopItemQuantity = 15;
	const BottomItemQuantity = 15;

	return (
		<>
			<Header />
			<SliderTop itemsQuantity={TopItemQuantity} />
			<SliderBottom itemsQuantity={BottomItemQuantity} />
		</>
	);
};
