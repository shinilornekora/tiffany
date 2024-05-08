import { Header } from '../../modules/Header/header';

import { useGlobalStyles } from '../../shared/styles/globalStyles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { SliderTop } from './sliders/SliderTop';
import { SliderBottom } from './sliders/SliderBottom';

export const Branches = () => {
	const { classes: globalClasses } = useGlobalStyles();

	const TopItemQuantity = 15;
	const BottomItemQuantity = 15;

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
