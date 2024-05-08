import React, { CSSProperties } from 'react';

interface ReactArrowProps {
	className?: string;
	style?: CSSProperties;
	onClick?: () => void;
}

export const SamplePrevArrow = ({
	className,
	style,
	onClick,
}: ReactArrowProps) => {
	return (
		<div
			className={className}
			style={{
				...style,
				display: 'block',
				position: 'absolute',
				left: '-2%',
				zIndex: '100',
			}}
			onClick={onClick}
		/>
	);
};
