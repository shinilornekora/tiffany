import { useStyles } from './styles';
import Header from "../../components/header";
import {useStyles as useCommonStyles} from "../../styles/commonStyles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CSSProperties, MouseEventHandler } from 'react';
import TopItem from "./TopItem";
import BottomItems from "./BottomItems";

interface ReactArrowProps {
    className?: string;
    style?: CSSProperties;
    onClick?: MouseEventHandler;
}

function SamplePrevArrow(props: ReactArrowProps) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", position: "absolute", left: '-2%', zIndex: "100"}}
            onClick={onClick}
        />
    );
}

function SampleNextArrow(props: ReactArrowProps) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", position: "absolute", right: '-2%', zIndex: "100"}}
            onClick={onClick}
        />
    );
}


const Branches = () => {
    const {classes} = useStyles();
    const { classes: commonClasses } = useCommonStyles();
    const TopItemQuantity = 15;
    const BottomItemQuantity = 15;
    const topItems = Array.from({ length: TopItemQuantity }, (_, index) => <TopItem key={index} />);
    const bottomItems = Array.from({length: BottomItemQuantity}, (_, index) => <BottomItems key={index} />);
    const settingsTop = {
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
                }
            },
            {
                breakpoint: 2500,
                settings: {
                    slidesToShow: 11,
                }
            },
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 9,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 7,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };
    const settingsBottom = {
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
        <>
            <Header/>
            <div className={classes.branches__blockForTopWrapper}>
                <Slider {...settingsTop} className={classes.branches__blockForTop}>
                    {topItems}
                </Slider>
            </div>
            <div className={classes.branches__blockForBottomWrapper}>
                <Slider {...settingsBottom} className={classes.branches__blockForBottom}>
                    {bottomItems}
                </Slider>
            </div>
        </>
    );
}

export default Branches;