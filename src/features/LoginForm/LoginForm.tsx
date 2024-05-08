import React, { useCallback } from 'react';

import { FormEvent, Ref } from 'react';
import { FormLogin } from '../GreetBlock/GreetBlock';
import { useTranslation } from '../../shared/hooks/useTranslation';
import { useStyles } from './styles';

type Props = {
	inputRef: Ref<HTMLInputElement>;
	inputFocus: string;
	handleLogin: (event: FormEvent<HTMLFormElement>) => void;
	setInputFocus: (e: FormLogin) => void;
	handleShowRegistrationForm: () => void;
};

export const LoginForm: React.FC<Props> = ({
	inputFocus,
	inputRef,
	handleLogin,
	handleShowRegistrationForm,
	setInputFocus,
}) => {
	const t = useTranslation();
	const { classes, cx } = useStyles();

	const handleUsernameFocus = useCallback(() => setInputFocus('username'), [setInputFocus]);
	const handlePasswordFocus = useCallback(() => setInputFocus('password'), [setInputFocus]);

	return (
		<div className={classes.greatings__formWrapper} ref={inputRef}>
			<form
				action='#'
				method='post'
				className={classes.startInputWrapper}
				onSubmit={handleLogin}
			>
				<div className={classes.input__wrapper}>
					<input
						className={cx(classes.input__default, {
							[classes.activeInput]: inputFocus === 'username'
						})}
						type='text'
						name='username'
						autoComplete='off'
						placeholder='login'
						onFocus={handleUsernameFocus}
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
						onFocus={handlePasswordFocus}
					/>
				</div>
				<div>
					<button
						className={classes.button}
						type='submit'
					>
						{t('Log in')}
					</button>
				</div>
			</form>
			<div className={classes.greatings__changeForm}>
				{t('No account?')}
				<span onClick={handleShowRegistrationForm}>
					{t('Sign up!')}
				</span>
			</div>
		</div>
	);
};
