import React from 'react';
import { useStyles } from './styles';

type Props = {
	focus: string;
	cb: () => void;
	name: string;
};

export const TitleInput = ({ focus, cb, name }: Props) => {
	const { classes, cx } = useStyles();

	return (
		<div className={classes.input__wrapper}>
			<input
				className={cx(classes.input__default, {
					[classes.activeInput]: focus === name,
				})}
				type={name === 'password' ? name : 'text'}
				autoComplete='off'
				placeholder={name}
				name={name}
				onFocus={cb}
			/>
		</div>
	);
};
