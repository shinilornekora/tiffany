import React, { useCallback } from 'react';

import { FormEvent, Ref } from 'react';
import { FormLogin } from '../GreetBlock/GreetBlock';
import { useTranslation } from '../../shared/hooks/useTranslation';
import { useStyles } from './styles';

type Props = {
	inputRef: Ref<HTMLInputElement>;
	inputFocus: string;
	handleRegistry: (event: FormEvent<HTMLFormElement>) => void;
	setInputFocus: (e: FormLogin) => void;
	handleShowLoginForm: () => void;
};

export const RegistryForm: React.FC<Props> = ({
	inputRef,
	handleRegistry,
	inputFocus,
	setInputFocus,
	handleShowLoginForm,
}) => {
	const t = useTranslation();
	const { classes, cx } = useStyles();

	const nameFocus = useCallback(() => setInputFocus('name'), [setInputFocus]);
	const usernameFocus = useCallback(() => setInputFocus('name'), [setInputFocus]);
	const passwordFocus = useCallback(() => setInputFocus('password'), [setInputFocus]);

	return (
		<div className={classes.greatings__formWrapper} ref={inputRef}>
			<form
				action='#'
				method='post'
				className={classes.startInputWrapper}
				onSubmit={handleRegistry}
			>
				<div className={classes.input__wrapper}>
					<input
						className={`${classes.input__default} ${inputFocus === 'name' ? classes.activeInput : ''}`}
						type='text'
						name='personName'
						autoComplete='off'
						placeholder='name'
						onFocus={nameFocus}
					/>
				</div>
				<div className={classes.input__wrapper}>
					<input
						className={`${classes.input__default} ${inputFocus === 'username' ? classes.activeInput : ''}`}
						type='text'
						name='username'
						autoComplete='off'
						placeholder='login'
						onFocus={ usernameFocus }
					/>
				</div>
				<div className={classes.input__wrapper}>
					<input
						className={cx(
							classes.input__default, {
								[classes.activeInput]: inputFocus === 'password'
							}
						)}
						type='password'
						name='userpass'
						autoComplete='off'
						placeholder='password'
						onFocus={passwordFocus}
					/>
				</div>
				<div>
					<button className={classes.button} type='submit'>
						{t('Register')}
					</button>
				</div>
			</form>
			<div className={classes.greatings__changeForm}>
				{t('Already have an account?')}
				<span onClick={handleShowLoginForm}>{` ${t('Sign in!')}`}</span>
			</div>
		</div>
	);
};
