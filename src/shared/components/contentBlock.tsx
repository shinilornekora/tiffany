import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { useStyles as useCommonStyles } from '../styles/commonStyles';
import { useStyles } from '../pages/Greetings/styles';

type FormLogin = 'username' | 'password' | ''

const ContentBlock = () => {
    const { classes: commonClasses } = useCommonStyles();
    const { classes, cx } = useStyles()
    const ref = useRef(null);
    const inputRef = useRef(null);
    const [ logInActive, setLoginActive ] = useState<boolean>(false)
    const [ inputFocus, setInputFocus ] = useState<FormLogin>('')
    const [ show, setShow ] = useState<boolean>(false);

    useEffect(() => {
        if (!logInActive) {
            return;
        }
        gsap.to(
            ref.current,
            {
                duration: 1,
                y: -200,
                ease: 'power3.inOut',
            },
        )
        setTimeout(() => setShow(true), 1000)
    }, [logInActive]);

    useEffect(() => {
        gsap.timeline().to(
            inputRef,
            {
                opacity: 0,
            }
        ).fromTo(inputRef,
            {
                opacity: 0,
            },
            {
            opacity: 1,
            duration: 1,
            });
    }, [show])

    return (
            <div className={commonClasses.content__wrapper}>
                <div ref={ref} onClick={() => setLoginActive(true)} className={commonClasses.content__textblock}>
                    <p className={commonClasses.greetings__slider}>Welcome to TeamEntropy</p>
                    <p className={commonClasses.greetings__description}>An endless world of possibilities in soundscape design</p>
                </div>
                <form action="#" method="post" className={cx(commonClasses.content__wrapper, classes.startInputWrapper)} ref={inputRef}>
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
                            className={`${commonClasses.input__default} ${inputFocus === 'password' ? commonClasses.activeInput : ''}`}
                            type="password"
                            name="userpass"
                            autoComplete="off"
                            placeholder="password"
                            onFocus={() => setInputFocus('password')}
                            onBlur={() => {}}
                        />
                    </div>
                </form>
            </div>
    );
};

export default ContentBlock;
