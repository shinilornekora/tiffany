import React from 'react';

import { useStyles } from '../styles';
import { useTranslation } from '../../../shared/hooks/useTranslation';

export const TopItem = () => {
	const { classes } = useStyles();
	const t = useTranslation();

	// TODO: сюда прокидывать название веток
	const pluginName = 'Andromeda';

	return (
		<div className={classes.branches__blockForTopItem}>
			<span>{pluginName}</span>
		</div>
	);
};
