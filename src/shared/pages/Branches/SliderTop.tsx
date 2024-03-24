import SamplePrevArrow from './SamplePrevArrow';
import SampleNextArrow from './SampleNextArrow';
import { useStyles } from './styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TopItem from './TopItem';

interface SliderProps {
	itemsQuantity: number;
}

const SliderTop = ({ itemsQuantity }: SliderProps) => {
	const items = Array.from({ length: itemsQuantity }, (_, index) => (
		<TopItem key={index} />
	));

	Tiffany.log(items);

	const { classes } = useStyles();

	const settings = {
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 9,
		slidesToScroll: 1,
		prevArrow: <SamplePrevArrow />,
		nextArrow: <SampleNextArrow />,
		responsive: [
			{
				breakpoint: 5000,
				settings: {
					slidesToShow: 15,
				},
			},
			{
				breakpoint: 2500,
				settings: {
					slidesToShow: 11,
				},
			},
			{
				breakpoint: 2000,
				settings: {
					slidesToShow: 9,
				},
			},
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 7,
				},
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 6,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	};

	return (
		<div className={classes.branches__blockForTopWrapper}>
			<Slider {...settings} className={classes.branches__blockForTop}>
				{items}
			</Slider>
		</div>
	);
};

export default SliderTop;
