import React, { useCallback, useEffect, useRef, useState } from 'react';

import gsap from 'gsap';

import { Logo } from './Logo';
import { VideoBackground } from './VideoBackground';
import { useStyles as useCommonStyles } from '@shared/styles/commonStyles';
import { useStyles } from '@pages/Greetings/styles';

import { FormLogin } from '@types';
import { AuthForm } from '@entities/AuthForm';

export const ContentBlock = () => {
	const { classes } = useStyles();
	const { classes: commonClasses } = useCommonStyles();

	const [show, setShow] = useState<boolean>(false);
	const [inputFocus, setInputFocus] = useState<FormLogin>('');
	const [logInActive, setLoginActive] = useState<boolean>(false);

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
					_ref={ref}
				/>
				<AuthForm
					inputFocus={inputFocus}
					inputRef={inputRef}
					setInputFocus={setInputFocus}
				/>
			</div>
		</div>
	);
};
