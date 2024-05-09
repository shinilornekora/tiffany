import React, { useCallback, useEffect, useRef, useState } from 'react';

import gsap from 'gsap';

import { Logo } from './Logo';
import { VideoBackground } from './VideoBackground';
import { RegistryForm } from '@entities/RegistryForm';
import { LoginForm } from '@entities/LoginForm';

import { useLog } from '@shared/hooks/useLog';
import { useReg } from '@shared/hooks/useReg';
import { useStyles as useCommonStyles } from '@shared/styles/commonStyles';
import { useStyles } from '@pages/Greetings/styles';

import { FormLogin } from '@types';

export const ContentBlock = () => {
	const { classes } = useStyles();
	const { classes: commonClasses } = useCommonStyles();

	const [show, setShow] = useState<boolean>(false);
	const [inputFocus, setInputFocus] = useState<FormLogin>('');
	const [logInActive, setLoginActive] = useState<boolean>(false);
	const [isRegFormVisible, setRegFormVisible] = useState<boolean>(false);

	const handleShowRegistrationForm = useCallback(
		() => setRegFormVisible(true),
		[setRegFormVisible],
	);
	const handleShowLoginForm = useCallback(
		() => setRegFormVisible(false),
		[setRegFormVisible],
	);
	const handleSetLoginActive = useCallback(
		() => setLoginActive(true),
		[setLoginActive],
	);

	const ref = useRef(null);
	const inputRef = useRef(null);

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

	return (
		<div className={classes.wrapper}>
			<VideoBackground classes={classes} />
			<div className={commonClasses.content__wrapper}>
				<Logo
					commonClasses={commonClasses}
					cb={handleSetLoginActive}
					ref={ref}
				/>
				{/**
				 * Выглядит так как будто этот компонент на самом деле один и тот же.
				 * TODO: обобщить в один и унести логику определения внутрь
				 */}
				{isRegFormVisible ? (
					<RegistryForm
						inputFocus={inputFocus}
						inputRef={inputRef}
						handleRegistry={useReg}
						setInputFocus={setInputFocus}
						handleShowLoginForm={handleShowLoginForm}
					/>
				) : (
					<LoginForm
						inputFocus={inputFocus}
						inputRef={inputRef}
						setInputFocus={setInputFocus}
						handleLogin={useLog}
						handleShowRegistrationForm={handleShowRegistrationForm}
					/>
				)}
			</div>
		</div>
	);
};
