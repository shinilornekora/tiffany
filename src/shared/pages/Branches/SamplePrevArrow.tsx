import React, {CSSProperties} from 'react';

interface ReactArrowProps {
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
}

const SamplePrevArrow = ({ className, style, onClick }: ReactArrowProps) => {

	return (
		<div
			className={className}
			style={{ ...style, display: 'block', position: 'absolute', left: '-2%', zIndex: '100'}}
			onClick={onClick}
		/>
	);
};

export default SamplePrevArrow;