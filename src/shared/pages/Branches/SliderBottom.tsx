import {useStyles} from "./styles";
import SamplePrevArrow from "./SamplePrevArrow";
import SampleNextArrow from "./SampleNextArrow";
import Slider from "react-slick";
import React from "react";
import BottomItems from "./BottomItems";

interface SliderProps {
    itemsQuantity: number;
}

const SliderBottom = ({ itemsQuantity }: SliderProps) => {
    const items = Array.from({length: itemsQuantity}, (_, index) => <BottomItems key={index} />);

    const {classes} = useStyles();

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 5000,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 3500,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <div className={classes.branches__blockForBottomWrapper}>
            <Slider {...settings} className={classes.branches__blockForBottom}>
                {items}
            </Slider>
        </div>
    );
};

export default SliderBottom;