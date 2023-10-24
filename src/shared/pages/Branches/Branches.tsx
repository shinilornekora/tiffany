<<<<<<< HEAD
import Header from '../../components/header';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SliderTop from './SliderTop';
import SliderBottom from './SliderBottom';


export default function Branches() {
	const TopItemQuantity = 15;
	const BottomItemQuantity = 15;

	return (
		<>
			<Header/>
			<SliderTop itemsQuantity={TopItemQuantity} />
			<SliderBottom itemsQuantity={BottomItemQuantity} />
		</>
	);
=======
import { useStyles } from './styles';
import Header from "../../components/header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderTop from "./SliderTop";
import SliderBottom from "./SliderBottom";


export default function () {
    const TopItemQuantity = 15;
    const BottomItemQuantity = 15;
    return (
        <>
            <Header/>
            <SliderTop itemsQuantity={TopItemQuantity} />
            <SliderBottom itemsQuantity={BottomItemQuantity} />
        </>
    );
>>>>>>> b1766be (Dima 3 (#13))
}