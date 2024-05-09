import React from 'react';

import { SliderBottom } from './sliders/SliderBottom';
import { SliderTop } from './sliders/SliderTop';

import { useGlobalStyles } from '@shared/styles/globalStyles';
import { Header } from '@features/Header/header';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

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
