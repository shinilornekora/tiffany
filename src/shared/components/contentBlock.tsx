import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { useStyles as useCommonStyles } from '../styles/commonStyles';
import { useStyles } from '../pages/Greetings/styles';
import { useGlobalStyles } from '../styles/globalStyles';
import useTranslation from '../utils/useTranslation';



type FormLogin = 'username' | 'password' | 'name' | '';

const ContentBlock = () => {
	const { classes: commonClasses } = useCommonStyles();
	const { classes: globalClasses } = useGlobalStyles();

	const t = useTranslation();
	const { classes, cx } = useStyles();
	const ref = useRef(null);
	const inputRef = useRef(null);
	const [logInActive, setLoginActive] = useState<boolean>(false);
	const [inputFocus, setInputFocus] = useState<FormLogin>('');
	const [show, setShow] = useState<boolean>(false);

	useEffect(() => {
		if (!logInActive) {
			return;
		}
		gsap.to(
			ref.current,
			{
				duration: 1,
				y: '-150px',
				cursor: 'auto',
				ease: 'power3.inOut',
			},
		);
		setTimeout(() => setShow(true), 400);
	}, [logInActive]);

	useEffect(() => {
		if (!show) {
			return;
		}
		gsap.to(
			inputRef.current,
			{
				pointerEvents: 'auto',
				opacity: 1,
				duration: 2,
			}
		);
	}, [show]);

	const [isRegistrationFormVisible, setIsRegistrationFormVisible] = useState<boolean>(false);

	const handleShowRegistrationForm = () => {
		setIsRegistrationFormVisible(true);
	};

	const handleShowLoginForm = () => {
		setIsRegistrationFormVisible(false);
	};

	return (
		<div className={classes.wrapper}>
			<div>
				<div className={classes.bg__overlay}>
					<video className={classes.bg__player} autoPlay muted loop>
						{/*<source src={video} type="video/mp4"/>*/}
					</video>
				</div>
			</div>
			<div className={commonClasses.content__wrapper}>
				<div ref={ref} onClick={() => setLoginActive(true)} className={commonClasses.content__textblock}>
					<p className={commonClasses.greetings__slider}>Welcome to TeamEntropy</p>
					<p className={commonClasses.greetings__description}>An endless world of possibilities in soundscape design</p>
				</div>
				{isRegistrationFormVisible ? (
					// Форма регистрации
					<div className={commonClasses.greatings__formWrapper} ref={inputRef}>
						<form action="#" method="post" className={classes.startInputWrapper} >
							<div className={commonClasses.input__wrapper}>
								<input
									className={`${commonClasses.input__default} ${inputFocus === 'name' ? commonClasses.activeInput : ''}`}
									type="text"
									name="personName"
									autoComplete="off"
									placeholder="name"
									onFocus={() => setInputFocus('name')}
									onBlur={() => {}}
								/>
							</div>
							<div className={commonClasses.input__wrapper}>
								<input
									className={`${commonClasses.input__default} ${inputFocus === 'username' ? commonClasses.activeInput : ''}`}
									type="text"
									name="username"
									autoComplete="off"
									placeholder="login"
									onFocus={() => setInputFocus('username')}
									onBlur={() => {}}
								/>
							</div>
							<div className={commonClasses.input__wrapper}>
								<input
									className={cx(commonClasses.input__default, inputFocus === 'password' ? commonClasses.activeInput : '')}
									type="password"
									name="userpass"
									autoComplete="off"
									placeholder="password"
									onFocus={() => setInputFocus('password')}
									onBlur={() => {}}
								/>
							</div>
							<div>
								<button className={globalClasses.button} type="submit" >{ t('Register') }</button>
							</div>
						</form>
						<div className={commonClasses.greatings__changeForm}>{t('Уже есть аккаунт? ')}
							<span onClick={handleShowLoginForm}>
								{t('Войти!')}
							</span>
						</div>
					</div>
				) : (
					// Форма авторизации
					<div className={commonClasses.greatings__formWrapper} ref={inputRef}>
						<form action="#" method="post" className={classes.startInputWrapper}>
							<div className={commonClasses.input__wrapper}>
								<input
									className={`${commonClasses.input__default} ${inputFocus === 'username' ? commonClasses.activeInput : ''}`}
									type="text"
									name="username"
									autoComplete="off"
									placeholder="login"
									onFocus={() => setInputFocus('username')}
									onBlur={() => {}}
								/>
							</div>
							<div className={commonClasses.input__wrapper}>
								<input
									className={cx(commonClasses.input__default, inputFocus === 'password' ? commonClasses.activeInput : '')}
									type="password"
									name="userpass"
									autoComplete="off"
									placeholder="password"
									onFocus={() => setInputFocus('password')}
									onBlur={() => {}}
								/>
							</div>
							<div>
								<button className={globalClasses.button} type="submit" >{ t('Log in') }</button>
							</div>
						</form>
						<div className={commonClasses.greatings__changeForm}>{t('Нет аккаунта? ')}
							<span onClick={handleShowRegistrationForm}>
								{t('Зарегистрироваться!')}
							</span>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ContentBlock;
