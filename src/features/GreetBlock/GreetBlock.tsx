import gsap from 'gsap';
import React, {
	FormEvent,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { useStyles as useCommonStyles } from '../../shared/styles/commonStyles';
import { useStyles } from '../../widgets/Greetings/styles';
import { RegistryForm } from '../RegistryForm';
import { LoginForm } from '../LoginForm';

import video from '../../shared/static/title.mp4';

export type FormLogin = 'username' | 'password' | 'name' | '';

export const ContentBlock = () => {
	const { classes } = useStyles();
	const { classes: commonClasses } = useCommonStyles();

	const [logInActive, setLoginActive] = useState<boolean>(false);
	const [inputFocus, setInputFocus] = useState<FormLogin>('');
	const [show, setShow] = useState<boolean>(false);

	const inputRef = useRef(null);
	const ref = useRef(null);

	const handleRegistry = useCallback((event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// FIXME: со стороны бека блок по cors.
		const data = {
			// @ts-expect-error: fuck
			username: (event.target as EventTarget)['0'].value,
			// @ts-expect-error: fuck
			password: (event.target as EventTarget)['2'].value,
		};

		// TODO: это надо заменить на axios-запросы которые у нас в api.ts
		fetch('http://94.250.251.77:80/api/auth/register', {
			method: 'POST',
			body: JSON.stringify(data),
		});
	}, []);

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
			<div>
				<div className={classes.bg__overlay}>
					<video className={classes.bg__player} autoPlay muted loop>
						<source src={video} type='video/mp4' />
					</video>
				</div>
			</div>
			<div className={commonClasses.content__wrapper}>
				<div
					ref={ref}
					onClick={handleSetLoginActive}
					className={commonClasses.content__textblock}
				>
					<p className={commonClasses.greetings__slider}>
						Welcome to TeamEntropy
					</p>
					<p className={commonClasses.greetings__description}>
						An endless world of possibilities in soundscape design
					</p>
				</div>
				{isRegistrationFormVisible ? (
					<RegistryForm
						classes={classes}
						commonClasses={commonClasses}
						inputFocus={inputFocus}
						inputRef={inputRef}
						handleRegistry={handleRegistry}
						setInputFocus={setInputFocus}
						handleShowLoginForm={handleShowLoginForm}
					/>
				) : (
					<LoginForm
						classes={classes}
						commonClasses={commonClasses}
						inputFocus={inputFocus}
						inputRef={inputRef}
						handleLogin={handleRegistry}
						setInputFocus={setInputFocus}
						handleShowRegistrationForm={handleShowRegistrationForm}
					/>
				)}
			</div>
		</div>
	);
};
