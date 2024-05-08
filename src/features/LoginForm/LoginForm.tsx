import React from 'react';

import { FormEvent, Ref } from 'react';
import { FormLogin } from '../GreetBlock/GreetBlock';
import { useTranslation } from '../../shared/hooks/useTranslation';
import { useGlobalStyles } from '../../shared/styles/globalStyles';

type Props = {
	classes: Record<string, string>;
	commonClasses: Record<string, string>;
	inputRef: Ref<HTMLInputElement>;
	inputFocus: string;
	handleLogin: (event: FormEvent<HTMLFormElement>) => void;
	setInputFocus: (e: FormLogin) => void;
	handleShowRegistrationForm: () => void;
};

export const LoginForm: React.FC<Props> = ({
	classes,
	commonClasses,
	inputFocus,
	inputRef,
	handleLogin,
	handleShowRegistrationForm,
	setInputFocus,
}) => {
	const t = useTranslation();
	const { classes: globalClasses, cx } = useGlobalStyles();

	return (
		<div className={commonClasses.greatings__formWrapper} ref={inputRef}>
			<form
				action='#'
				method='post'
				className={classes.startInputWrapper}
			>
				<div className={commonClasses.input__wrapper}>
					<input
						className={`${commonClasses.input__default} ${inputFocus === 'username' ? commonClasses.activeInput : ''}`}
						type='text'
						name='username'
						autoComplete='off'
						placeholder='login'
						onFocus={() => setInputFocus('username')}
						onBlur={() => {}}
					/>
				</div>
				<div className={commonClasses.input__wrapper}>
					<input
						className={cx(
							commonClasses.input__default,
							inputFocus === 'password'
								? commonClasses.activeInput
								: '',
						)}
						type='password'
						name='userpass'
						autoComplete='off'
						placeholder='password'
						onFocus={() => setInputFocus('password')}
						onBlur={() => {}}
					/>
				</div>
				<div>
					<button
						className={globalClasses.button}
						onClick={() => handleLogin}
						type='submit'
					>
						{t('Log in')}
					</button>
				</div>
			</form>
			<div className={commonClasses.greatings__changeForm}>
				{t('Нет аккаунта? ')}
				<span onClick={handleShowRegistrationForm}>
					{t('Зарегистрироваться!')}
				</span>
			</div>
		</div>
	);
};
