import React, {
	FormEvent,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';

import gsap from 'gsap';

import { RegistryForm } from '../RegistryForm';
import { LoginForm } from '../LoginForm';

import { useStyles } from '../../pages/Greetings/styles';
import { useTranslation } from '../../shared/hooks/useTranslation';
import { useStyles as useCommonStyles } from '../../shared/styles/commonStyles';

import video from '../../shared/static/title.mp4';

export type FormLogin = 'username' | 'password' | 'name' | '';

export const ContentBlock = () => {
	const t = useTranslation();

	const { classes } = useStyles();
	const { classes: commonClasses } = useCommonStyles();

	const [logInActive, setLoginActive] = useState<boolean>(false);
	const [inputFocus, setInputFocus] = useState<FormLogin>('');
	const [show, setShow] = useState<boolean>(false);

	const inputRef = useRef(null);
	const ref = useRef(null);

	const handleRegistry = useCallback((event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	}, []);

	const handleLogin = useCallback((event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	}, [])

	useEffect(() => {
		if (!logInActive) {
			return;
		}
		gsap.to(ref.current, {
			duration: 1,
			y: '-150px',
			cursor: 'auto',
			ease: 'power3.inOut',
		});
		setTimeout(() => setShow(true), 400);
	}, [logInActive]);

	useEffect(() => {
		if (!show) {
			return;
		}
		gsap.to(inputRef.current, {
			pointerEvents: 'auto',
			opacity: 1,
			duration: 2,
		});
	}, [show]);

	const [isRegistrationFormVisible, setIsRegistrationFormVisible] =
		useState<boolean>(false);

	const handleShowRegistrationForm = useCallback(() => {
		setIsRegistrationFormVisible(true);
	}, [setIsRegistrationFormVisible]);

	const handleShowLoginForm = useCallback(() => {
		setIsRegistrationFormVisible(false);
	}, [setIsRegistrationFormVisible]);

	const handleSetLoginActive = useCallback(
		() => setLoginActive(true),
		[setLoginActive],
	);

	return (
		<div className={classes.wrapper}>
			{/* TODO: вынести в отдельный компонент видеофона */}
			<div>
				<div className={classes.bg__overlay}>
					<video className={classes.bg__player} autoPlay muted loop>
						<source src={video} type='video/mp4' />
					</video>
				</div>
			</div>
			<div className={commonClasses.content__wrapper}>
				{/* TODO: вынести в отдельный компонент лого */}
				<div
					ref={ref}
					onClick={handleSetLoginActive}
					className={commonClasses.content__textblock}
				>
					<p className={commonClasses.greetings__slider}>
						{ t('Welcome to TeamEntropy') }
					</p>
					<p className={commonClasses.greetings__description}>
						{ t('An endless world of possibilities in soundscape design') }
					</p>
				</div>
				
				{/**
				  * Выглядит так как будто этот компонент на самом деле один и тот же. 
				  * TODO: обобщить в один и унести логику определения внутрь
				  */}
				{isRegistrationFormVisible ? (
					<RegistryForm
						inputFocus={inputFocus}
						inputRef={inputRef}
						handleRegistry={handleRegistry}
						setInputFocus={setInputFocus}
						handleShowLoginForm={handleShowLoginForm}
					/>
				) : (
					<LoginForm
						inputFocus={inputFocus}
						inputRef={inputRef}
						setInputFocus={setInputFocus}
						handleLogin={handleLogin}
						handleShowRegistrationForm={handleShowRegistrationForm}
					/>
				)}
			</div>
		</div>
	);
};
