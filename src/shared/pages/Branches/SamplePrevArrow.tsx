<<<<<<< HEAD
import React, {CSSProperties} from 'react';
=======
import React, {CSSProperties} from "react";
>>>>>>> b1766be (Dima 3 (#13))

interface ReactArrowProps {
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
}

const SamplePrevArrow = ({ className, style, onClick }: ReactArrowProps) => {
<<<<<<< HEAD
	return (
		<div
			className={className}
			style={{ ...style, display: 'block', position: 'absolute', left: '-2%', zIndex: '100'}}
			onClick={onClick}
		/>
	);
=======
    return (
        <div
            className={className}
            style={{ ...style, display: "block", position: "absolute", left: '-2%', zIndex: "100"}}
            onClick={onClick}
        />
    );
>>>>>>> b1766be (Dima 3 (#13))
};

export default SamplePrevArrow;