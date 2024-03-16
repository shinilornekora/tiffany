import React, {FC} from 'react';
import {useGlobalStyles} from '../styles/globalStyles';
import {
	CSSInterpolation,
	GlobalStyles as TssGlobalStyles
} from 'tss-react';

export const GlobalStyle: FC<{children: React.ReactNode}> = ({children}) => {
	const { classes: globalClasses } = useGlobalStyles();

	return (
		<>
			<TssGlobalStyles styles={ globalClasses as CSSInterpolation}/>
			{children}
		</>
	);
};
